import { PanelRightClose, type LucideProps } from "lucide-react";
import {
  createContext,
  use,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

// Apply interface and types - - - - - - - - - - - - - - - - - - -
interface ChildrenType {
  children: ReactNode;
}

interface IContext {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  //   triggerRef: null | Ref<HTMLDivElement>;
}

interface ITriggerProps {
  icon?: ReactElement<LucideProps>;
  children?: ReactNode;
}

const DrawerContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: function () {},
});

const DrawerStorage = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

const Header = ({ children }: ChildrenType) => {};

const Body = ({ children }: ChildrenType) => {
  const { isOpen, setIsOpen } = use(DrawerContext);

  return (
    <>
      <dialog
        autoFocus
        role="dialog"
        open
        className={`w-full h-screen fixed top-0 bottom-0 right-0 
                left-0 bg-[rgba(0,0,0,0.1)] transition-all duration-300 z-100
               ${isOpen ? "translate-x-0" : "translate-x-175"}`}
      >
        
        <div
          className={`h-screen w-80 bg-white border-l border-l-slate-200`}
        >
          <div className="flex items-center justify-end p-2">
            <PanelRightClose
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 p-2 cursor-pointer text-slate-700 hover:bg-slate-100 rounded-lg left-2 top-2"
            />
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
};

const Item = ({ children }: ChildrenType) => {
  return (
    <>
      <div className="dropdown-item w-full transition-all px-2 py-3 flex items-center justify-around cursor-pointer hover:text-purple-600 hover:bg-purple-50">
        {children}
      </div>
    </>
  );
};

const Trigger = ({ icon }: ITriggerProps) => {
  const { setIsOpen } = use(DrawerContext);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
    >
      {icon ?? null}
    </button>
  );
};

const Drawer = ({ children }: ChildrenType) => {
  return <DrawerStorage>{children}</DrawerStorage>;
};

Drawer.Trigger = Trigger;
Drawer.Body = Body;
Drawer.Item = Item;
Drawer.Header = Header;

export default Drawer;
