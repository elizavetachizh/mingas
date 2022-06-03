import React from 'react';
import { Container } from '../managment/styles';
import Header from '../../../components/header';
import './styles.css';
export default function Union() {
  let isScrolling = false;

  window.addEventListener('scroll', throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  document.addEventListener('DOMContentLoaded', scrolling, false);

  const listItems = document.querySelectorAll('#mainContent ol li');
  const firstBox = document.querySelector('#firstBox');
  const secondBox = document.querySelector('#secondBox');

  function scrolling(e) {
    if (isPartiallyVisible(firstBox)) {
      firstBox.classList.add('active');

      document.body.classList.add('colorOne');
      document.body.classList.remove('colorTwo');
    } else {
      document.body.classList.remove('colorOne');
      document.body.classList.remove('colorTwo');
    }

    if (isFullyVisible(secondBox)) {
      secondBox.classList.add('active');

      document.body.classList.add('colorTwo');
      document.body.classList.remove('colorOne');
    }

    for (const i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];

      if (isPartiallyVisible(listItem)) {
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
      }
    }
  }

  function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return top + height >= 0 && height + window.innerHeight >= bottom;
  }

  function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
  }

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <div className={'body--div'}>
        <div id="mainContent">
          <h1>Scroll Down</h1>
          <p>
            Первичная профсоюзная организация УП «МИНГАЗ» входит в состав Белорусского
            профессионального союза работников энергетики, газовой и топливной промышленности.
            Сегодня в состав Первичной профсоюзной организации УП «МИНГАЗ» входят 15 цеховых
            профсоюзных организаций, объединяя около 2000 членов профсоюза. Все работники являются
            членами профсоюза.
          </p>
          <ol id="myList">
            <li>
              {' '}
              Первичная профсоюзная организация УП «МИНГАЗ» ведет свой отсчет с 1957 года. Первым
              председателем профсоюза был Матченко Л., затем возглавляли профсоюз Мельник Н.Ф.,
              Климович Е.Т., Гарминович В., Барейко Т.М., Корженевский А.В., Каменко Н.И., Рабеко
              И.И., а с 2010 года председателем избрана Доморацкая М.А.
            </li>
            <li>
              {' '}
              Профсоюзный комитет состоит из неравнодушных работников, энтузиастов своего дела,
              которые умеют работать с коллективом и могут организовать любые мероприятия.
            </li>
            <li>
              Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus lacinia auctor
              eget id nisi.
            </li>
            <li>Donec pulvinar nunc feugiat semper consequat.</li>
            <li>Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.</li>
            <li>In nec sem id libero egestas cursus vel a urna.</li>
            <li>
              Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut urna consectetur,
              et pellentesque mi molestie.
            </li>
            <li>Aliquam ut felis venenatis, dapibus ante non, gravida nulla.</li>
            <li>Donec consectetur quam in urna commodo, sed aliquet metus vehicula.</li>
            <li>Mauris eget est sit amet felis eleifend sagittis non id nulla.</li>
          </ol>
          <p id="firstBox">
            Phasellus tortor nisl, dapibus at posuere sed, tempor in massa. Pellentesque eu sodales
            orci, finibus congue libero. Mauris molestie bibendum posuere.
          </p>
          <p>
            Nunc blandit varius sapien quis ultrices. Vestibulum et consequat augue. Pellentesque et
            maximus nisl, sit amet dictum ante.
          </p>
          <p id="secondBox">
            Nullam magna augue, consequat eu augue ut, volutpat fringilla est. Ut commodo ac magna
            vulputate dictum.
          </p>
        </div>
      </div>
    </Container>
  );
}
