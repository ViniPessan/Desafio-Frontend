import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import Form from '../../components/Form/Form';
import { Enterprise } from '../../types';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function NewEnterprise() {
  const router = useRouter();
  
  const handlePushButtonReturn = () => {
    router.push("/");
  };

  const handleCreate = async (data: Enterprise) => {
    try {
      const response = await axios.post('http://localhost:3001/enterprises', data);

      if (response.status === 201) {
        toast.success('Criado com sucesso!')
        router.push('/');
      } else {
        toast.error('Erro ao criar o empreendimento. Por favor, tente novamente.');      }
    } catch (error) {
      toast.error('Erro ao criar o empreendimento. Por favor, tente novamente.');    }
  };

  return (
    <div>
      <Header
        title="Cadastro de empreendimento"
        IconReturn={true}
        button={false}
        PushButton={handlePushButtonReturn}
        PushButtonReturn={handlePushButtonReturn}
      />
      <Form onSubmit={handleCreate} />
      <ButtonFooter
        description="Cadastrar"
        pushClick={() => document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
      />
    </div>
  );
}
