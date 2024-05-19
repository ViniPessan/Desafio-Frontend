import { InputAdornment, MenuItem } from "@material-ui/core";
import { AddressBox, Container, CustomInput, CustomSelect } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { Enterprise } from "../../types";

interface FormProps {
  initialData?: Enterprise;
  onSubmit: (data: Enterprise) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ initialData, onSubmit }) => {
  const [status, setStatus] = useState(initialData?.status || 'Breve lançamento');
  const [type, setType] = useState(initialData?.type || 'Residencia');
  const [name, setName] = useState(initialData?.name || '');
  const [cep, setCep] = useState(initialData?.address?.cep || '');
  const [number, setNumber] = useState(initialData?.address?.number || '');
  const [street, setStreet] = useState(initialData?.address?.street || '');
  const [district, setDistrict] = useState(initialData?.address?.district || '');
  const [city, setCity] = useState(initialData?.address?.city || '');
  const [state, setState] = useState(initialData?.address?.state || '');

  useEffect(() => {
    const getAddress = async () => {
      if (cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const { data } = response;

          setStreet(data.logradouro);
          setDistrict(data.bairro);
          setCity(data.localidade);
          setState(data.uf);
        } catch (error) {
          console.error('Erro ao buscar o CEP:', error);
          setStreet('');
          setDistrict('');
          setCity('');
          setState('');
        }
      }
    };

    getAddress();
  }, [cep]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const enterpriseData: Enterprise = {
      name,
      status,
      type,
      address: {
        cep,
        number,
        street,
        district,
        city,
        state
      },
      purpose: "HOME"
    };

    await onSubmit(enterpriseData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Informações</h3>
        <div>
          <CustomSelect
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
          >
            <MenuItem value={'Breve lançamento'}>Breve lançamento</MenuItem>
            <MenuItem value={'Lançamento'}>Lançamento</MenuItem>
            <MenuItem value={'Em obras'}>Em obras</MenuItem>
            <MenuItem value={'Pronto para morar'}>Pronto para morar</MenuItem>
          </CustomSelect>
          
          <CustomInput
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <span>Nome</span>
              </InputAdornment>
            }
          />

          <CustomSelect
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value as string)}
          >
            <MenuItem value={'Residencia'}>Residencia</MenuItem>
            <MenuItem value={'Comercial'}>Comercial</MenuItem>
          </CustomSelect>
            
          <CustomInput
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <span>CEP</span>
              </InputAdornment>
            }
          />
          <AddressBox>
            <p>{street},</p> 
            <p>{district}</p> 
            <p>{city}</p> 
            <p>{state}</p>           
          </AddressBox>
          
          <CustomInput
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <span>Número</span>
              </InputAdornment>
            }
          />
        </div>
      </form>
    </Container>
  );
};

export default Form;
