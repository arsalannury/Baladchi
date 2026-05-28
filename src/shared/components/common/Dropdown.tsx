import {
  createContext,
  use,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { type LucideProps } from "lucide-react";
import Button from "./Button";

// Apply interface and types - - - - - - - - - - - - - - - - - - -
interface ChildrenType {
  children: ReactNode;
}

interface ITriggerProps {
  icon?: ReactElement<LucideProps>;
  children?: ReactNode;
}

type IContentProps = {
  showClose?: boolean;
} & ChildrenType;

interface IContext {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

// Create context - - - - - - - - - - - - - - - - - - -
const DropdownContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: function () {},
});

// Add child components - - - - - - - - - - - - - - - - - - -
const DropdownStorage = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const uniqueId = Math.floor(Math.random() * 1234) + "-" + Date.now();
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children, icon }: ITriggerProps) => {
  const { isOpen, setIsOpen } = use(DropdownContext);

  return (
    <div
      className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      {icon ?? null}
      {children}
    </div>
  );
};

const Item = ({ children }: ChildrenType) => {
  return (
    <>
      <div className="dropdown-item w-full transition-all px-2 py-3 rounded-md flex items-center justify-around cursor-pointer hover:text-purple-600 hover:bg-purple-50">
        {children}
      </div>
    </>
  );
};

const Content = ({ children, showClose }: IContentProps) => {
  const { isOpen, setIsOpen } = use(DropdownContext);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-11 right-0 bg-white border border-slate-200
                  p-2 items-start justify-start flex-col dropdown-trigger
                  w-50 h-56 rounded-lg ${isOpen ? "flex" : "hidden"}`}
    >
      {children}
      {showClose ? (
        <Button onClick={() => setIsOpen(false)}>بستن</Button>
      ) : null}
    </div>
  );
};

// Add main component - - - - - - - - - - - - - - - - - - -
const Dropdown = ({ children }: ChildrenType) => {
  useEffect(() => {
    document.addEventListener("click", (event) => {
      console.log(event.target);
    });
  }, []);

  return <DropdownStorage>{children}</DropdownStorage>;
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Item = Item;

export default Dropdown;
