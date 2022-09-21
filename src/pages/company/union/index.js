import React, { useEffect } from 'react';
import Header from '../../../components/header';
import './styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import napravlenie from '../../../assets/union/napravlenie.jpg';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import Footer from '../../../components/footer';
import TitleFun from '../../../components/title';
import TitleForHome from '../../../components/TitleForHome';
import { Container, Img, Link } from '../styles';
import { IoLogoInstagram, IoMdPaperPlane } from 'react-icons/io';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.jpg';

export default function Union() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback
        className={'none'}
        img={minsk}
        name={'Первичная профсоюзная организация УП «МИНГАЗ»'}
      />
      <AdditionalDiv>
        <div className={'grids'}>
          <div className={'text--div'}>
            <div className={'boxes'} data-aos={'fade-up'}>
              Первичная профсоюзная организация УП «МИНГАЗ» входит в состав Белорусского
              профессионального союза работников энергетики, газовой и топливной промышленности.
              Сегодня в состав Первичной профсоюзной организации УП «МИНГАЗ» входят 15 цеховых
              профсоюзных организаций, объединяя около 2000 членов профсоюза. Все работники являются
              членами профсоюза.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Первичная профсоюзная организация УП «МИНГАЗ» ведет свой отсчет с 1957 года. Первым
              председателем профсоюза был Матченко Л., затем возглавляли профсоюз Мельник Н.Ф.,
              Климович Е.Т., Гарминович В., Барейко Т.М., Корженевский А.В., Каменко Н.И., Рабеко
              И.И., а с 2010 года председателем избрана Доморацкая М.А.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Профсоюзный комитет состоит из неравнодушных работников, энтузиастов своего дела,
              которые умеют работать с коллективом и могут организовать любые мероприятия.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Самое главное достижение нашего профсоюза – это коллективный договор, который
              гарантирует работникам высокий уровень социальной защищенности. На сегодняшний день в
              Минске найдется немного организаций, которые предоставляют своим работникам такие
              гарантии в области повышения квалификации, оплаты и охраны труда, социальных выплат,
              создания условий для развития культурных и спортивных интересов, как наш МИНГАЗ.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Руководство УП «МИНГАЗ» в полной мере использует такой стимул, как материальное
              поощрение для повышения заинтересованности работников в результатах своего труда.
              Премии и дополнительные выплаты рабочие и служащие получают к отпуску,
              профессиональным праздникам, юбилеям, а также при непрерывном стаже работы, рождении
              детей, в связи с трудными жизненными обстоятельствами. Более того, ветераны труда,
              проработавшие на предприятии более 15 лет, ежемесячно получают материальную помощь.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Однако, не хлебом единым жив человек. Ежегодно проводятся чествование ветеранов
              Великой Отечественной войны, ветеранов труда, воинов–интернационалистов, защитников
              Отечества и женщин к 8 Марта. Праздники проходят торжественно, с концертными номерами,
              вручением цветов и подарков, искренними словами поздравлений и теплыми пожеланиями.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Администрацией совместно с профсоюзным комитетом ведется большая работа по созданию
              здоровых и безопасных условий труда работников. Важную роль играет общественный
              контроль за соблюдением законодательства о труде.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              В 2005 году был организован коллектив художественной самодеятельности. Участники
              коллектива художественной самодеятельности выступают на городских мероприятиях,
              принимают участие в конкурсах областного и республиканского масштаба.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Не менее насыщенной и активной является работа профсоюзной организации в области
              физкультурно-оздоровительной деятельности. Ежегодно арендуются для проведения
              тренировок и соревнований помещения городских спортивных комплексов и бассейнов. Среди
              работников Организации регулярно проводятся смотры различной направленности, рабочие
              спартакиады.
            </div>
            <div className={'boxes'} data-aos={'fade-up'}>
              Интересным и популярным направлением деятельности профкома является организация
              туристических поездок. Практикуются также организованные культурные акции, посещения
              театров. С 2010 года ежеквартально выпускается газета «Столичный газовик», в которой
              освещается жизнь коллектива УП «МИНГАЗ». Совместно с администрацией Организации члены
              профсоюзного комитета делают все возможное, чтобы каждый работник мог с гордостью
              сказать: «Я работаю в МИНГАЗе»!
            </div>
            <Link style={{ marginLeft: '40px' }} data-aos={'fade-up'} className={'social-networks'}>
              Мы в социальных сетях:
              <div>
                <a
                  title={'Наш инстаграм'}
                  href={'https://instagram.com/mingas.by?igshid=YmMyMTA2M2Y='}
                  target={'_blank'}
                >
                  <IoLogoInstagram style={{ width: '54px', height: '54px' }} />
                </a>
                <a title={'Наш телеграм'} href={'https://t.me/+UBzXdk0X5NoyZjJi'} target={'_blank'}>
                  <IoMdPaperPlane style={{ width: '54px', height: '54px' }} />
                </a>
              </div>
            </Link>
          </div>
          <Img src={require('../../../assets/management/departaments/Доморацкая.jpg')} />
          <TitleForHome
            className={'company'}
            margin={'s'}
            color={'blue'}
            infoTitle={
              'ПРЕДСЕДАТЕЛЬ ПРОФКОМА ПЕРВИЧНОЙ ПРОФСОЮЗНОЙ ОРГАНИЗАЦИИ УП «МИНГАЗ» - ДОМОРАЦКАЯ МАРИНА АЛЕКСЕЕВНА'
            }
            fontSize={'s'}
          />
          <div className={'img--div'} data-aos={'fade-up'}>
            <img src={napravlenie} alt={''} />
          </div>
        </div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
