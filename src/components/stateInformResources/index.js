import TitleForHome from '../TitleForHome';
import { Container } from '../../pages/Home/News/styles';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivCarousel } from './styles';
// import '@brainhubeu/react-carousel/lib/style.css';
export default function StateInformResources() {
  return (
    <Container>
      <TitleForHome color={'blue'} infoTitle={'Государственные информационные ресурсы'} />
      <Carousel
        plugins={[
          'infinite',
          'fastSwipe',
          'centered',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={1000}
      >
        <DivCarousel>
          <figure>
            <a href={'https://president.gov.by/ru'}>
              <img
                width="208"
                height="113"
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/portal-prezidenta.jpg"
                className="attachment-large size-large"
                alt=""
              />
              <p>Портал Президента Республики Беларусь</p>
            </a>
          </figure>
        </DivCarousel>
        <DivCarousel>
          <figure>
            <a href={'https://minenergo.gov.by/'}>
              <img
                width="208"
                height="113"
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/Minenergo.jpg"
                className="attachment-full size-full"
                alt=""
              />
              <p>Министерство энергетики РБ</p>
            </a>
          </figure>
        </DivCarousel>
        <DivCarousel>
          <a href="http://www.topgas.by/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/BeltopgasV3.jpg"
              data-src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/BeltopgasV3.jpg"
              className="attachment-full size-full lazyloaded"
              alt=""
            />
            <p>ГПО «Белтопгаз»</p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a href="http://perv.minsk.gov.by/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2019/02/zukmshh.png"
              className="attachment-full size-full"
              alt=""
            />
            <p>Администрация Первомайского района г. Минска</p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a
            href="https://pravo.by/pravovaya-informatsiya/vsenarodnoe-obsuzhdenie-proekta-konstitutsii-respubliki-belarus/"
            target="_blank"
          >
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2019/03/zukmshh.jpg"
              className="attachment-full size-full"
              alt=""
            />
            <p>Проект изменений и дополнений Конституции Республики Беларусь</p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a href="https://pravo.by/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/pravo-by.jpg"
              className="attachment-full size-full"
              alt=""
            />
            <p>Национальный правовой интернет-портал</p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_298,h_144/https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
              className="attachment-full size-full"
              alt=""
            />
            <p>
              Портал рейтинговой оценки качества оказания услуг организациями Республики Беларусь
            </p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a href="http://mfa.gov.by/mulateral/sdg" target="_blank">
            <img
              width="208"
              height="113"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_208,h_113/https://mingas.by/wp-content/uploads/2018/05/CYP.jpg"
              className="attachment-full size-full"
              alt=""
            />
            <p>Цели устойчивого развития в Беларуси</p>
          </a>
        </DivCarousel>
      </Carousel>
    </Container>
  );
}
