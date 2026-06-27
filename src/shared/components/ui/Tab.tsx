import { type MouseEventHandler, type ReactNode } from "react";

interface IProps {
  /** The unique id for separate tabs item */
  tabId: string;
  /** The onClick functionality run on click every item */
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  /** The boolean flag for manage highlight a tab */
  isActive?: boolean;
  /** The title of tab Item */
  title: string;
  /** The icon with its classes for tab item */
  icon: ReactNode;
}

interface IContProps {
  children: ReactNode;
  containerClassName?: string;
}

const Contaienr = ({ children, containerClassName = "" }: IContProps) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 p-1 flex gap-1 ${containerClassName}`}
    >
      {children}
    </div>
  );
};

const Tab = ({ tabId, onClick, isActive, title, icon }: IProps) => {
  return (
    <>
      {/* Filter Tabs */}
      <button
        id={tabId}
        onClick={onClick}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
          isActive
            ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-sm"
            : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        {icon}
        <span>{title}</span>
      </button>
    </>
  );
};

Tab.Container = Contaienr;

export default Tab;
