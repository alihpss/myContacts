import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ContacForm from '../../components/ContactForm.js';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );

        console.log({ contactData });
        setIsLoading(false);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title="Editar Ali"
      />

      <ContacForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
