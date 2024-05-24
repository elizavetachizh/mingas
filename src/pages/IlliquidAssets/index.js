import ContainerContent from '../../components/Container';
import React from "react";

export default function IlliquidAssets() {
  return (
    <ContainerContent
      name={'Реализация неликвидов'}
      content={  <div style={{margin:"0 auto", width:'70%', display:'flex', flexDirection:'column'}}><a style={{margin:"1rem 0"}} href={require('./documents/ballons.docx')} target={"_blank"} download>Баллоны СУГ 50 литров</a><a style={{margin:"1rem 0"}} href={require('./documents/grp.docx')} target={"_blank"} download>Каркасы здания газорегуляторного пункта из бетонных панелей</a><a style={{margin:"1rem 0"}} href={require('./documents/carkas.docx')} target={"_blank"} download>Каркас здания газорегуляторного пункта Б/У из металлопрофиля</a></div>}
    />
  );
}
