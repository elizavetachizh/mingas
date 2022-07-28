import { AdditionalDiv } from './styles';
const style = {
  backgroundImage: `url(${require(`../../assets/background/podlojca.png`)})`,
};

export default function AdditionalDivFun() {
  return <AdditionalDiv style={style}></AdditionalDiv>;
}
