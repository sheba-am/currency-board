import { useRouter } from 'next/router';
import { Currency } from '@/types/Currency'; // Assuming you have this type

type Props = {
  currency: Currency;
};

export default function CurrencyModal({ currency }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.push('/currencies', undefined, { shallow: true });
  };

  return (
    <div className="modal-backdrop show" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 1050,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="modal-content p-4 position-relative">
          
          {/* Top row: logo + close button */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <img src="/logo.svg" alt="Logo" height={24} />
            </div>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>

          {/* Currency details */}
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-3">
              <img src={currency.image} alt={currency.name} width={48} height={48} />
              <div>
                <h5 className="mb-1">{currency.name}</h5>
                <small className="custom-text-muted">{currency.symbol.toUpperCase()}</small>
              </div>
            </div>
            <div className="text-end custom-text-muted">
              <small>Last updated:</small><br />
              <strong>{currency.last_updated}</strong>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4">
            <h2 className="fw-bold">${currency.current_price.toLocaleString()} <small className="custom-text-muted">USD</small></h2>
          </div>

        </div>
      </div>
    </div>
  );
}
