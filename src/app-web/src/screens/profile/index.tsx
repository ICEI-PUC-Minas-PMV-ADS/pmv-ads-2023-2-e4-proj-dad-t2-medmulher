import Header from "../../components/header";

const Profile = () => {
  return (
    <>
      <Header />

      <main className="page">
        <section className="doctor-infos">
            <div className="doctor">
                <div className="info">
                    <img src="" alt="" />
                    <div className="personal">
                        <h2 className="doctor-name">Dr Fulano de tal</h2>
                        <span className="doctor-specialty">Astrologista</span>
                    </div>
                </div>
                <div className="credentials">
                    <p className="crm">CRM:</p>
                    <span className="crm-code">123546</span>
                </div>
            </div>

            <div className="doctor-options">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
