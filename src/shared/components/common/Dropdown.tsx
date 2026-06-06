import {
  createContext,
  use,
  useEffect,
  useState,
  useRef,
  type ReactElement,
  type ReactNode,
  type Ref,
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

type IBodyProps = {
  showClose?: boolean;
  width?: string;
} & Partial<ChildrenType>;

interface IContext {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  triggerRef: null | Ref<HTMLDivElement>;
}

// Create context - - - - - - - - - - - - - - - - - - -
const DropdownContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: function () {},
  triggerRef: null,
});

// Add child components - - - - - - - - - - - - - - - - - - -
const DropdownStorage = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleClickOnDocument = (event: PointerEvent) => {
    const closestTrigger = (event.target as HTMLInputElement).closest(
      ".dropdown-trigger",
    );

    if (!closestTrigger) {
      document.body.style.overflow = "";
    }

    if (triggerRef.current !== closestTrigger) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close all dropdowns expect current
    document.addEventListener("click", handleClickOnDocument);
    return () => document.removeEventListener("click", handleClickOnDocument);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, triggerRef }}>
      {children}
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children, icon }: ITriggerProps) => {
  const { isOpen, setIsOpen, triggerRef } = use(DropdownContext);

  return (
    <div
      ref={triggerRef}
      className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg relative dropdown-trigger"
      onClick={() => {
        if (!isOpen) {
          document.body.style.overflow = "hidden";
        }
        setIsOpen(!isOpen);
      }}
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

const Body = ({ children, showClose, width = "52" }: IBodyProps) => {
  const { isOpen, setIsOpen } = use(DropdownContext);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-11 right-0 bg-white border border-slate-200
                  p-2 items-start justify-start flex-col dropdown-body
                  w-${width} h-56 rounded-lg ${isOpen ? "flex" : "hidden"}`}
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
  return <DropdownStorage>{children}</DropdownStorage>;
};

Dropdown.Trigger = Trigger;
Dropdown.Body = Body;
Dropdown.Item = Item;

export default Dropdown;
