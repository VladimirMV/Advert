import { RotatingTriangles } from 'react-loader-spinner';

export default function LoaderComponent() {
  return (
    <RotatingTriangles
      height="180"
      width="180"
      colors={['#fa7584;', '#6eb9fc', '#fd957d']}
      ariaLabel="rotating-triangels-loading"
      radius="12.5"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}
