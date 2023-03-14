import './Footer.scss';

const Footer = ({ allPostsAmount }: { allPostsAmount: number }) => {
  return (
    <footer>
      Total Posts Available : {allPostsAmount} © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
