import BodyMain from './Body/BodyMain';
import NavBar from './Header/NavBar';

export default function index() {
  return (
    <main className="min-h-screen bg-light-mode-background transition-all duration-300 dark:bg-dark-mode-background">
      <NavBar heading="Where in the world?" />
      <BodyMain />
    </main>
  );
}
