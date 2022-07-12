import TitleFun from '../../../title';
import { useState } from 'react';
import { Div } from '../styles';

export default function DopFunctional({
  uniqueName,
  maximumImplementationPeriod,
  certificateValidityPeriod,
  boardSize,
  documents,
  contactInform,
}) {
  const [open, setOpen] = useState(false);
  const animate = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };
  return (
    <div>
      {/*<TitleFun color={'blue'} infoTitle={serviceName} />*/}
      <h2>{uniqueName}</h2>
      <p>
        Максимальный срок осуществления административной процедуры: {maximumImplementationPeriod}
      </p>
      <p>
        Срок действия справки, другого документа (решения), выдаваемых (принимаемого) при
        осуществлении административной процедуры: {certificateValidityPeriod}
      </p>
      <p>Размер платы, взимаемой при осуществлении административной процедуры: {boardSize}</p>
      <div onClick={animate}>
        <p>Документы и (или) сведения для осуществления административной процедуры: </p>
      </div>
      <Div>
        <div className={open && `shake`}>{documents}</div>
      </Div>
      <p>Контактная информация {contactInform}</p>
    </div>
  );
}
