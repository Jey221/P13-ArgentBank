import Footer from '../components/Footer';
import AccountChecking from '../components/Users/Accounts/AccountChecking';
import AccountCreditCard from '../components/Users/Accounts/AccountCreditCard';
import AccountSaving from '../components/Users/Accounts/AccountSaving';
import TitleUser from '../components/Users/TitleUser';
import Header from '../components/Header';

function Users() {
  return (
    <div className="body">
      <Header />
      <main className="main bg-dark">
        <TitleUser />
        <AccountChecking />
        <AccountSaving />
        <AccountCreditCard />
      </main>
      <Footer />
    </div>
  );
}

export default Users;
