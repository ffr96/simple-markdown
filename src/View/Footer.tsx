import githubLogo from '/GitHub-Mark-Light-32px.png';

const Footer = () => {
  return (
    <div className='w-full fixed text-sm bottom-0 from-slate-600 bg-gradient-to-l to-slate-700 text-slate-200 p-1 flex flex-row'>
      <a href='https://github.com/ffr96/simple-markdown'>
        <img
          alt='github logo'
          className='ml-2'
          width={15}
          height={15}
          src={githubLogo}
        />
      </a>
    </div>
  );
};

export default Footer;
