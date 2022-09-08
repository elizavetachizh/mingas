import useMediaQuery from '../../Home/parallax/useMediaQuery';
import MediaQueryOfLifeOfMingas from '../lifeOfMingas/mediaQeryindex';
import LifeOfMingas from '../lifeOfMingas';

export default function ChangeLifeOfMingas() {
  const medium = useMediaQuery('(max-width: 1200px)');
  return (
    <>
      <LifeOfMingas />}
    </>
  );
}
