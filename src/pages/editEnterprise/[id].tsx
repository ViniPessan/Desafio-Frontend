import { useRouter } from "next/dist/client/router";
import Header from "../../components/Header";
import Form from "../../components/Form/Form";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import { useState, useEffect } from "react";
import axios from "axios";
import { Enterprise } from '../../types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function EditEnterprise() {
  const router = useRouter();
  const { id } = router.query;
  const [enterprise, setEnterprise] = useState<Enterprise | null>(null);

  useEffect(() => {
    if (id) {
      const fetchEnterprise = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/enterprises/${id}`);
          console.log('Fetched enterprise:', response.data);
          setEnterprise(response.data);
        } catch (error) {
          console.error('Failed to fetch enterprise data:', error);
        }
      };

      fetchEnterprise();
    }
  }, [id]);

  const handleUpdate = async (data: Enterprise) => {
    try {
      console.log('Data to update:', data); 
      const response = await axios.put(`http://localhost:3001/enterprises/${id}`, data);

      if (response.status === 200) {
        toast.success('Atualizado com sucesso!')
        router.push('/'); 
      } else {
        toast.error('Erro ao atualizar o empreendimento. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Erro ao atualizar o empreendimento. Por favor, tente novamente.');
    }
  };

  const handlePushButtonReturn = () => {
    router.push("/");
  };

  if (!enterprise) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header
        title="Editar empreendimento"
        IconReturn={true}
        button={false}
        PushButton={handlePushButtonReturn}
        PushButtonReturn={handlePushButtonReturn}
      />
      <Form initialData={enterprise} onSubmit={handleUpdate} />
      <ButtonFooter
        description="Editar"
        pushClick={() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
      />
    </div>
  );
}
