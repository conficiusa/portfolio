"use client";

import Loader from "@/components/animatedLogo";
import { ReactNode, useState } from "react";

const LoaderProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);

	const finishLoading = () => setIsLoading(false);

	return isLoading ? <Loader finishLoading={finishLoading} /> : <>{children}</>;
};

export default LoaderProvider;
