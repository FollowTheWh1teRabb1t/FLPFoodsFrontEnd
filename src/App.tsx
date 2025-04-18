import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "@/pages/homePage/homePage";
import Login from '@/pages/Login/Login';
import CreateAccount from '@/pages/CreateAccount/CreateAccount';
import { CartProvider } from './context/cartContext';
import MesasComponent from '@/components/Tables/tablesComponent';
import { MesasProvider } from './context/tableContext';
import { AuthProvider } from './context/authContext'; // Importe o AuthProvider
import { WalletProvider } from './context/walletContext';

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <MesasProvider>
                    <WalletProvider>
                        <CartProvider>
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route path='/tables' element={<MesasComponent />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/create' element={<CreateAccount />} />
                            </Routes>
                        </CartProvider>
                    </WalletProvider>
                </MesasProvider>
            </AuthProvider>
        </Router>
    );
}
