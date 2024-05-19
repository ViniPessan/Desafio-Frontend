import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import ButtonFooter from "../components/ButtonFooter/ButtonFooter";
import Header from "../components/Header";
import { 
    BoxNameEnterprise, 
    ContainerHome,  
    ContentHome, 
    ContentStatus,
    ContainertLupa, 
    ContentLupa,
} from "../styles/styles";
import { Enterprise } from "../types";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteAlert from "../components/deleteAlert/DeleteAlert";
import SearchInput from "../components/searchInput/searchInput";

export default function Home() {
    const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
    const [isHome, setIsHome] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState(0);
    const [search, setSearch] = useState("");
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const router = useRouter();

    const fetchEnterprises = async () => {
        try {
            const response = await axios.get<Enterprise[]>('http://localhost:3001/enterprises');
            setEnterprises(response.data);
        } catch (error) {
            toast.error("Erro ao buscar os empreendimentos");
        }
    };

    const deleteEnterprise = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3001/enterprises/${id}`);
            setOpenModalDelete(false);
            setDeleteId(null);
            fetchEnterprises();
            toast.success("Empreendimento excluído com sucesso!");
        } catch (err) {
            toast.error("Erro ao excluir o empreendimento. Por favor, tente novamente.");
        }
    };


    const numberEnterprises = () => {
        setEnterprisesNumber(enterprises.length);
    };

    const handleHereNewEnterprise = () => {
        router.push('http://localhost:3000/newEnterprise')
    };

    const handleEditEnterprise = (id: string) => {
        router.push(`http://localhost:3000/editEnterprise/${id}`)
    };

    const handleHome = () => {
        setIsHome(true);
    };

    const handleSearch = enterprises.filter((enterprise) => {
        return enterprise.name.toLowerCase().includes(search.toLowerCase());
    });

    useEffect(() => {
        fetchEnterprises();
    }, []);

    useEffect(() => {
        numberEnterprises();
    }, [enterprises]);
  

    return (
        <>
            <Head>
                <title>ChallengJob</title>
            </Head>

            <main>
                {isHome && (
                    <>
                        <Header
                            title="Empreendimentos"
                            button={true}
                            IconReturn={false}
                            PushButton={handleHereNewEnterprise}
                            PushButtonReturn={handleHome}
                        />

                        <ContainertLupa>
                            <ContentLupa>
                                <div>
                                    <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
                                </div>
                            </ContentLupa>
                        </ContainertLupa>

                        {handleSearch.slice(0, rowsPerPage).map((data) => (
                            <ContainerHome key={data.id}>
                                <ContentHome>
                                    {openModalDelete && deleteId === data.id ? (
                                        <DeleteAlert
                                            onCancel={() => {
                                                setOpenModalDelete(false);
                                                setDeleteId(null);
                                            }}
                                            onConfirm={() => deleteId && deleteEnterprise(deleteId)}
                                        />
                                    ) : (
                                        <div>
                                            <BoxNameEnterprise>
                                                <span>{data.name}</span>
                                            </BoxNameEnterprise>
                                            <p>
                                                {data.address.street}, {data.address.number} - {data.address.district}, {data.address.state}
                                            </p>
                                        </div>
                                    )}
                                    <ContentStatus>
                                        <span>
                                            <div>{data.status === "RELEASE" ? "Lançamento" : data.status}</div>
                                            <div>{data.purpose === "HOME" ? "Residencial" : data.purpose}</div>
                                        </span>
                                        <span>
                                            <img 
                                                onClick={() => data.id && handleEditEnterprise(data.id)}
                                                src="/images/Vector.svg" 
                                                alt="Icone de Lapis" 
                                            />
                                            <img
                                                onClick={() => {
                                                    data.id && setOpenModalDelete(true);
                                                    data.id && setDeleteId(data.id);
                                                }}
                                                src="/images/Vector-1.svg"
                                                alt="Icone de Lixeira"
                                            />
                                        </span>
                                    </ContentStatus>
                                </ContentHome>
                            </ContainerHome>
                        ))}

                        {enterprisesNumber >= rowsPerPage && (
                            <ButtonFooter
                                description={"Carregar mais"}
                                pushClick={() => setRowsPerPage(rowsPerPage + 5)}
                            />
                        )}
                    </>
                )}
            </main>
        </>
    );
}
