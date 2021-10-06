import { Button } from "../Button"
import { InputText } from "../InputText"
import { Link } from "../Link"

export const Login = () => {
  return (
    <div className='w-screen h-screen bg-gray-50 flex justify-center'>
      <div className='w-full h-full max-w-screen-lg grid grid-cols-2'>
        <aside className='flex justify-center items-center'>
          <img src="/finance.svg" alt="" />
        </aside>
        <main className='flex flex-col justify-center items-center gap-14'>
          <h1 className='font-bold text-3xl'>Gestão financeira Pessoal</h1>
          <form className='flex flex-col w-full gap-2'>
            <InputText text="Email" type="text"/>
            <InputText text="Senha" type="password"/>
            <Button disabled>Entrar</Button>
          </form>
          <Link href="/register">Registrar</Link>
        </main>
      </div>
    </div>
  )
}