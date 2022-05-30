import React from "react";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetsListLayout } from "../../layouts/SnippetsListLayout";

const Posts: React.FC = () => {
    return (
        <>
            <Header />
            <SnippetsListLayout />
            <Bottom />
        </>
    );
};

export default Posts;
