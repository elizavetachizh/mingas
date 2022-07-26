import TitleForHome from '../TitleForHome';
import { Container } from '../../pages/Home/News/styles';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { DivCarousel } from './styles';
// import '@brainhubeu/react-carousel/lib/style.css';
export default function StateInformResources() {
  return (
    <Container>
      <TitleForHome
        fontSize={'m'}
        color={'blue'}
        infoTitle={'Государственные информационные ресурсы'}
      />
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
          // {
          //   resolve: slidesToShowPlugin,
          //   options: {
          //     numberOfSlides: 3,
          //   },
          // },
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
            <a href={'https://www.belta.by/ru'}>
              <img
                width="208"
                height="113"
                src="https://www.belta.by/images/storage/banners/000016_1f05602c5d3d55b0d0ac9538d34543fd_work.svg"
                className="attachment-full size-full"
                alt=""
              />
              <p>БЕЛТА</p>
            </a>
          </figure>
        </DivCarousel>
        <DivCarousel>
          <a href="https://www.sb.by/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://www.sb.by/local/templates/html/images/logo.png"
              className="attachment-full size-full lazyloaded"
              alt=""
            />
            <p>Беларусь сегодня</p>
          </a>
        </DivCarousel>
        <DivCarousel>
          <a href="https://minsknews.by/" target="_blank">
            <img
              width="208"
              height="113"
              src="https://minsknews.by/wp-content/themes/mn_theme/images/minsknews.svg"
              className="attachment-full size-full"
              alt=""
            />
            <p>Минск-Сегодня</p>
          </a>
        </DivCarousel>
        {/*<DivCarousel>*/}
        {/*  <a*/}
        {/*    href="https://pravo.by/pravovaya-informatsiya/vsenarodnoe-obsuzhdenie-proekta-konstitutsii-respubliki-belarus/"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    <img*/}
        {/*      width="208"*/}
        {/*      height="113"*/}
        {/*      src="https://www.google.com/#"*/}
        {/*      className="attachment-full size-full"*/}
        {/*      alt=""*/}
        {/*    />*/}
        {/*    <p>Проект изменений и дополнений Конституции Республики Беларусь</p>*/}
        {/*  </a>*/}
        {/*</DivCarousel>*/}
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
          <a href="https://minsk.gov.by/ru/" target="_blank">
            <h1
              style={{
                fontSize: '26px',
                textTransform: 'uppercase',
                color: '#157dd4',
                margin: '0 auto',
                width: '40%',
              }}
            >
              Минский городской исполнительный комитет
            </h1>
          </a>
        </DivCarousel>
      </Carousel>
    </Container>
  );
}
