import Footer from '../components/Footer';
import AccountChecking from '../components/Users/Accounts/AccountChecking';
import AccountCreditCard from '../components/Users/Accounts/AccountCreditCard';
import AccountSaving from '../components/Users/Accounts/AccountSaving';
import Header from '../components/Header';
import EditZone from '../components/Users/EditZone';

function EditUser() {
  return (
    <div className="body">
      <Header />
      <main className="main bg-light">
        <EditZone />
        <AccountChecking />
        <AccountSaving />
        <AccountCreditCard />
      </main>
      <Footer />
    </div>
  );
}

export default EditUser;
