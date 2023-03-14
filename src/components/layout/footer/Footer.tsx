import './Footer.scss';

const Footer = ({ allPostsAmount }: { allPostsAmount: number }) => {
  return (
    <footer>
      Total Posts Available :{' '}
      <span data-testid="footer-count">{allPostsAmount}</span> ©{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
