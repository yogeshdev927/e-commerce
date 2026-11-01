import { ShoppingBag, X } from "lucide-react";


function CartDrawer({isOpen, onClose, items}){
  return(
    <>
    {/* Dhundhla parda */}
    <div
    onClick={onClose}
    className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${ isOpen ? "opacity-100" : "pointer-events-none opacity-0" }`}
    />

    {/* Side panel */}
    <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="text-base font-semibold text-stone-900">Your Bag({items.length})</h2>
          <button onClick={onClose} aria-label="Close bag">
            <X size={20} />
          </button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag size={40} className="text-stone-300" />
            <p className="text-sm font-medium text-stone-900">Your bag is empty</p>
            <p className="text-xs text-stone-500">
              Add a few crafted objects to get started.
            </p>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-stone-100 overflow-y-auto px-6">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 py-5">
                <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-lg object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <h3 className="text-sm font-semibold text-stone-900">{item.name}</h3>
                  <p className="mt-1 text-xs text-stone-500">${item.price}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-stone-600">Qty: {item.quantity}</span>
                    <p className="text-sm font-semibold text-stone-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  )
}
export default CartDrawer;