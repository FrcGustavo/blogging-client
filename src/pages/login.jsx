import { Login } from '@/organisms';
import { UsersService } from 'root/services';
import { useUserDispatch } from 'root/contexts';
import { loginAction } from 'store/actions';

const form = [
  { type: 'email', label: 'Correo:', placeholder: 'Escribe un correo electronico', value: '', name: 'email' },
  { type: 'password', label: 'Contraseña:', placeholder: 'Escribe una contraseña', value: '', name: 'password' }
];

const LoginPage = () => {
  const dispatch = useUserDispatch();
  const handleSubmit = (data) => {
    UsersService.login(data)
      .then((data) => {
        dispatch(loginAction(data));
      })
      .catch((err) => {
        console.log(err);
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
