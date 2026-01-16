import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { useState } from "react";
import { ProperListing, PropertyListingProps } from "../interfaces";

const PropertyListing = ({ listings }: ProperListing) => {
    return (
        <View 
         style={{
            flex: 1,
            rowGap: 10,
         }}
         >
            {listings?.map((listing, key) => (
                <PropertyListingCard {...listing} key={key} />
            ))}
         </View>
    )
}

export default PropertyListing;