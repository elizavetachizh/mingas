import React, { useState } from 'react';
import { DescriptionService } from './styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
export default function DopFunctionService({ name, description }) {
  const [open, setOpen] = useState(false);
  const animate = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };
  const [close, setClose] = useState(false);
  const animateClose = () => {
    setClose(true);
    if (close) {
      setClose(false);
    }
  };
  return (
    <AdditionalDiv>
      <TitleFun color={'blue'} infoTitle={name} />
      <DescriptionService>{description}</DescriptionService>
    </AdditionalDiv>
  );
}
