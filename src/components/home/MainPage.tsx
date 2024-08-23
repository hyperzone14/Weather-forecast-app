import LeftBar from '../left-side/LeftBar';
import RightBar from '../right-side/RightBar';

export default function MainPage() {
  return (
    <>
      <div className='flex h-screen'>
        <LeftBar />
        <RightBar />
      </div>
    </>
  );
}
