import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import Head from 'next/head'
import { ReactElement } from 'react'

const TransactionsDetails = () => {
	return (
		<>
			<Head>
				<title>Transactions Details - DuraCoins</title>
			</Head>
			<div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid nam
					officia dolorum saepe quidem distinctio ex, voluptas placeat id illum
					fugiat, quisquam magnam tenetur assumenda est, quaerat illo voluptatum
					exercitationem.
				</p>
			</div>
		</>
	)
}

TransactionsDetails.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default TransactionsDetails
