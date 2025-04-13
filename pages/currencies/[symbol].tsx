import { useCurrency } from '@/contexts/CurrencyContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/CurrencyModal.module.css';
import currLogo from '@/public/curr-logo.png';
import closeIcon from '@/public/close.png';
import { useTheme } from '@/contexts/ThemeContext';

const CurrencyModal = () => {
    const { selectedCurrency } = useCurrency();
    const router = useRouter();
    const { isDarkMode } = useTheme();

    if (!selectedCurrency) {
        return <div className={styles.backdrop}>No currency data found.</div>;
    }

    const handleClose = () => {
        // router.push('/currencies');
        router.back(); // will return to the same scroll position

    };

    const formattedDate = new Date(selectedCurrency.last_updated).toLocaleString().split(',')[0];

    return (
        <div className={styles.backdrop}>
            <div className={`${isDarkMode ? styles.modalDark : styles.modal}`}>
                {/* Header Row */}
                <div className={styles.modalHeader}>
                    <Image
                        src={currLogo}
                        alt="logo Section"
                    />
                    <button className={styles.closeButton} onClick={handleClose}>
                        <Image src={closeIcon} alt="Logo" />

                    </button>

                </div>

                {/* Currency Info Row */}
                <div className={styles.currencyRow}>
                    <div className={styles.currencyInfo}>
                        <img src={selectedCurrency.image} alt={selectedCurrency.name} width={48} height={48} />
                        <div className="d-flex ">
                            <strong className='me-1'>{selectedCurrency.name}</strong>
                            <strong className={styles.symbol}>{selectedCurrency.symbol.toUpperCase()}</strong>
                        </div>
                    </div>
                    <div className={`${styles.dateWrapper} d-none d-md-block`}>
                        <div className={styles.updated}> {formattedDate} Updated</div>
                    </div>
                </div>

                {/* Price */}
                <div className={styles.priceRow}>
                    <span className={styles.price}>{selectedCurrency.current_price.toLocaleString()}</span>
                    <span className={styles.usd}>USD</span>
                </div>
                {/* Date Wrapper (Visible only on mobile) */}
                <div className={`${styles.updated} d-block d-md-none`}>
                    {formattedDate} Updated
                </div>
            </div>
        </div>
    );
};

export default CurrencyModal;
