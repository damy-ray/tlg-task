import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const ContactMe = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="contact">
        <div className="input-row">
          <input placeholder="insert a name" {...register("first")} />
          <input placeholder="insert last name" {...register("last")} />
        </div>
        <div className="input-row">
          <input placeholder="insert an email" {...register("email")} />
          <select {...register('subject')}>
            <option value="problema">Issue with a product</option>
            <option value="rimborso">Refund</option>
            <option value="altro">Altro</option>
          </select>
        </div>
        <textarea type="text"  {...register("text")} />
        <div>
          <input type="checkbox"  {...register("privacy", { required: "Please, accept the privacy consent." })} />
          <label>Privacy consent</label>
        </div>
        <input type="submit" />
        <ErrorMessage
          errors={errors}
          name="privacy"
          render={({ message }) => <p>{message}</p>}
        />
      </form>
    </div>
  )
}

export default ContactMe
