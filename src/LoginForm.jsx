import { useForm } from "react-hook-form";

function LoginForm() {
  const form = useForm();
  //   const {register}
  function sendData(data) {
    console.log(data);
  }
  return (
    <form onSubmit={form.handleSubmit(sendData)}>
      <label>
        Login{" "}
        <input
          type="text"
          {...form.register("username", {
            required: "Поле должно быть заполнено!",
          })}
        />
      </label>
      <label>
        Email{" "}
        <input
          type="email"
          {...form.register("email", {
            required: "Введите адрес ",
          })}
        />
      </label>
      <label>
        Password{" "}
        <input
          type="password"
          {...form.register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;
