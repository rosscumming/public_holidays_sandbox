import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import axios from 'axios';
import {
  formatFullDate,
  formatYear,
  presentAndFutureYears,
} from '../utils/helpers';

const MainBodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: ${props => props.theme.fontColour.yellow};
`;

const HolidaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.fontColour.dark};
`;

const fetchAllHolidayData = async () => {
  try {
    const { data } = await axios.get('https://www.gov.uk/bank-holidays.json');
    return {
      props: { holidayData: data },
    };
  } catch (err) {
    console.error({ msg: err });
  }
};

export const getStaticProps = async () => {
  return fetchAllHolidayData();
};

const Home = ({ holidayData }) => {
  return (
    <MainBodyContainer>
      {holidayData.scotland.events.map(holiday => (
        <HolidaysContainer key={holiday.date}>
          <p>{holiday.title}</p>
          <p>{formatFullDate(holiday.date)}</p>
        </HolidaysContainer>
      ))}
    </MainBodyContainer>
  );
};

export default Home;
