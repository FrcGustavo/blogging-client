import { Login } from '@/organisms';
import { UsersService } from 'root/services';
import { useAppDispatch } from 'store/contexts';
import { login } from 'store/actions';

const form = [
  { type: 'email', label: 'Correo:', placeholder: 'Escribe un correo electronico', value: '', name: 'email' },
  { type: 'password', label: 'Contraseña:', placeholder: 'Escribe una contraseña', value: '', name: 'password' }
];

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (data) => {
    UsersService.login(data)
      .then((data) => {
        dispatch(login(data));
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <Login
      form={form}
      onHandleSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
