import { AdditionalDiv } from './styles';
import backgroundBefore from '../../assets/background/подложка.png';
const style = {
  backgroundImage: `url(${require(`../../assets/background/подложка.png`)})`,
};

export default function AdditionalDivFun() {
  return <AdditionalDiv style={style}></AdditionalDiv>;
}
