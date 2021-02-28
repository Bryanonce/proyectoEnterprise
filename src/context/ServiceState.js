import { ServiceContext } from './ServiceContext';
import {useAxios} from '../hooks/useAxios';
import {useForm} from '../hooks/useForm'

export const ServiceState = ({ children }) => {
    const [footForm, handleFootChange, forceFoot] = useForm({
        accion: '',
        central_id: '',
        central_nombre: '',
        codigo_estado: '',
        descripcion_estado: '',
        email_laboral: '',
        extension_asterisk: '',
        fecha_actualizacion: '',
        fecha_creacion: '',
        gestor_id: '',
        nombres: '',
        numero_documento: '',
        segundo_apellido: '',
        password_asterisk: '',
        primer_apellido: '',
        telefono_laboral: '',
        tipo_documento: '',
        tipo_gestor: '',
        tipo_usuario: '',
        usuario_actualizacion: '',
        usuario_creacion: '',
        usuario_id: '',
        usuario_login: '',
        valor_parametro: ''
    })
    const [form,handleInputChange, forceSearch] = useForm({
        search: ''
    })
    const {search} = form;
    const { data, loading, setBody, setUrl } = useAxios("https://app.crmetric.com/srv-crmetric-web/rest/usuario/listarUsuarioxnombre");
    const searchFunction = () => {
        setBody({
            nombres: search
        })
    }
    return (
        <ServiceContext.Provider
            value={{
                data,
                loading,
                setUrl,
                searchFunction,
                search,
                handleInputChange,
                footForm,
                handleFootChange,
                forceFoot,
                forceSearch
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
}