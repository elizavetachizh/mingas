import React from 'react';
import attesttat_2 from '../../../../assets/pdf/certificates/CertificateConformityExecution/1.png';
import attesttat_3 from '../../../../assets/pdf/certificates/CertificateConformityExecutionWork/1.png';
import attesttat_4 from '../../../../assets/pdf/certificates/CertificateConformityInstallation/1.png';
import { ContainerCertificats } from '../../styles';
export default function AttestatsFunction() {
  return (
    <ContainerCertificats>
      <img src={attesttat_2} alt={''} />
      <img src={attesttat_3} alt={''} />
      <img src={attesttat_4} />
    </ContainerCertificats>
  );
}
