import { Navbar, Footer } from "../components/";

const UPDATED = "14 November 2026";

export const Privacy = () => (
  <>
    <Navbar />
    <main className="flex flex-col mt-36 max-w-2xl text-black dark:text-white">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm">Last updated: {UPDATED}</p>
      <section className="py-6 space-y-4">
        <p>
          Sunny is a personal assistant built and used only by its author,
          Ayoub Lefhim (lefhim.a@gmail.com). It is not offered to the public
          and has a single user: the author.
        </p>
        <h2 className="text-xl font-bold">Data accessed</h2>
        <p>
          With the author&apos;s own consent, Sunny reads his Google Health
          data (activity, sleep, health metrics, nutrition), writes the meals
          he eats to Google Health, and creates events on his own Google
          Calendar.
        </p>
        <h2 className="text-xl font-bold">How data is used and stored</h2>
        <p>
          Data is used only to give the author personal summaries, reminders
          and calendar entries. It is stored on a private server controlled by
          the author. It is never sold, shared with third parties or used for
          advertising. Google user data is not used to develop or train
          generalized AI or machine learning models.
        </p>
        <h2 className="text-xl font-bold">Revoking access</h2>
        <p>
          The author can revoke access at any time from his Google Account
          security settings, and can delete the stored data from his server.
        </p>
        <h2 className="text-xl font-bold">Contact</h2>
        <p>lefhim.a@gmail.com</p>
      </section>
    </main>
    <Footer />
  </>
);

export const Terms = () => (
  <>
    <Navbar />
    <main className="flex flex-col mt-36 max-w-2xl text-black dark:text-white">
      <h1 className="text-2xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm">Last updated: {UPDATED}</p>
      <section className="py-6 space-y-4">
        <p>
          Sunny is a private, personal project of Ayoub Lefhim, used only by
          him. It is provided as is, without warranties of any kind, and is
          not available to other users.
        </p>
        <p>
          By using Sunny, the author authorizes it to access his own Google
          data as described in the Privacy Policy. Access can be revoked at any
          time from his Google Account.
        </p>
        <p>Contact: lefhim.a@gmail.com</p>
      </section>
    </main>
    <Footer />
  </>
);
