import { MagnifyingGlass } from 'react-loader-spinner';

export function LoaderSpinner() {
  return (
    <MagnifyingGlass
      visible={true}
      height="200"
      width="200"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
}

