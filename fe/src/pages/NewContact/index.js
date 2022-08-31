import PageHeader from '../../components/PageHeader';
import ContacForm from '../../components/ContactForm.js';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContacForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
