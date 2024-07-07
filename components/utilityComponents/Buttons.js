
const ButtonPurple = ({children}) => {
  return (
    <button className="bg-purple-500 text-white hover:bg-white hover:border-purple-500 hover:text-purple-500 active:bg-purple-100 border-2  font-bold py-1 px-3 rounded-md">{children}</button>
  )
};

const ButtonGray = ({children}) => {
  <button className="flexAdjustBtn flex item-center justify-center border-2 bg-gray-100 border-black py-1 font-bold px-3 gap-1 w-24 active:bg-purple-500 active:text-white">
{children}</button>
}

export {ButtonPurple,ButtonGray}