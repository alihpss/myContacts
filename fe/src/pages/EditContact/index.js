import ContacForm from '../../components/ContactForm.js';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar Ali"
      />

      <ContacForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
