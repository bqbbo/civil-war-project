import ImageContainer from "./ImageContainer";

export const slideData = [
    {
        key: "intro",
        title: "Welcome to Civil Rights After the War",
        className: "intro-slide",
        content: (
            <>
                <p>
                    This presentation explores the evolution of civil rights in
                    America following the Civil War.
                </p>
                <p>
                    There's a lot to cover: legislation, court cases,
                    amendments, and more!
                </p>
            </>
        ),
    },
    {
        key: "reconstruction",
        title: "Reconstruction Era",
        className: "reconstruction-slide",
        content: (
            <>
                <ImageContainer
                    imageSource={
                        "https://assets.coursehero.com/study-guides/lumen/images/ushistory2ay/politics-of-reconstruction-2/15_The_First_Vote_LC-DIG-ppmsca-37947-1000x5623.jpg"
                    }
                    altText={"Black man casting his vote for the first time"}
                />
                <p>
                    The period of time after the Civil War was called the
                    Reconstruction Era. It lasted from 1865 to 1877 and was a
                    time of rebuilding the South and integrating freed slaves
                    into society.
                </p>
                <p>
                    Following the Civil War, there were four million newly freed
                    slaves in the South, but they had no clear rights or
                    liberties to guide them.
                </p>
                <p>
                    Over the next decade, Congress would pass laws, form public
                    services, and enact new amendments that aimed to establish
                    civil rights for African Americans, but these laws were
                    often met with resistance and were not always enforced.
                </p>
                <p>
                    What were some of these laws, and why may they have been
                    resisted by Southern states?
                </p>
            </>
        ),
    },
    {
        key: "black-codes",
        title: "Black Codes",
        className: "black-codes-slide",
        content: (
            <>
                <ImageContainer
                    imageSource={"./img/black-codes.jpg"}
                    altText={"Black men escorted by police officers"}
                />
                <p>
                    Almost immediately following the War, Southern states passed{" "}
                    <strong>Black Codes</strong>. These were laws designed
                    specifically to limit the rights of African Americans and
                    maintain white supremacy in the South.
                </p>
                <p>
                    For example, many Black Codes restricted the ability of:
                    <ul>
                        <li>Loitering</li>
                        <li>Property Ownership</li>
                        <li>Testifying in Court</li>
                        <li>Homelessness</li>
                    </ul>
                </p>
                <p>
                    Southern states used these laws to continue to control
                    African Americans, pressure blacks into low paying labor
                    jobs and keeping blacks in submission, much like slavery
                    again.
                </p>
                <p>
                    The North did not respond to this well, and released a
                    flurry of legislation aimed at protecting the rights of
                    African Americans and countering Black Codes.
                </p>
            </>
        ),
    },
    {
        key: "civil-rights-act-1866",
        title: "Civil Rights Act of 1866",
        className: "civil-rights-act-1866-slide",
        content: (
            <>
                <p>
                    Congress took a historical step, repassing a bill even after
                    being vetoed by President Andrew Johnson, making it one of
                    the first laws to pass despite presidential rejection. This
                    bill was the <strong>Civil Rights Act of 1866</strong>, a
                    direct response to the South's Black Codes.
                </p>
                <p>
                    This bill stated several important things:
                    <ul>
                        <li>
                            All persons born in the United States are citizens.
                        </li>
                        <li>
                            All citizens are entitled to the same rights and
                            protections under the law, regardless of race,
                            color, or ethnicity.
                        </li>
                        <li>
                            Citizens have the right to make contracts, sue, give
                            evidence in court, and own property.
                        </li>
                    </ul>
                </p>
                <p>
                    The act essentially nullified the Black Codes, but many
                    Southern states opposed to fully implement its mandates.
                    Congress would have to try even harder, with future
                    legislation and amendments.
                </p>
            </>
        ),
    },
    {
        key: "reconstruction-amendments",
        title: "Reconstruction Amendments",
        className: "reconstruction-amendments-slide",
        content: (
            <>
                <p>
                    Following the Civil War, three new amendments were added to
                    the Constitution, known as the{" "}
                    <strong>Reconstruction Amendments</strong>. These were the
                    13th, 14th, and 15th Amendments. Their purpose: cover all
                    bases and ensure civil rights for those who needed it.
                </p>
                <h2>13th Amendment</h2>
                <p>
                    The 13th Amendment was ratified in 1865 and abolished
                    slavery and involuntary servitude, except as punishment for
                    a crime. Slavery could no longer exist under the 10th
                    Amendment like it had before the Civil War, and this
                    amendment was a significant step towards ensuring equality
                    for all Americans.
                </p>
                <h2>14th Amendment</h2>
                <p>
                    The 14th Amendment was ratified in 1868 and granted
                    citizenship to all persons born or naturalized in the United
                    States, including former slaves. It guaranteed equal
                    protections under the law and due process to{" "}
                    <strong>all</strong> citizens, regardless of race, color, or
                    ethnicity. This required states to respect the civil
                    liberties of African Americans.
                </p>
                <h2>15th Amendment</h2>
                <p>
                    The 15th Amendment was ratified in 1870 and prohibited
                    rejecting the right to vote based on race, color, or
                    previous condition of servitude. This means formerly
                    enslaved persons were now allowed to vote, and it was a
                    major step towards political equality for African Americans.
                </p>
            </>
        ),
    },
    {
        key: "enforcement-acts",
        title: "Enforcement Acts",
        className: "enforcement-acts-slide",
        content: (
            <>
                <ImageContainer
                    imageSource={
                        "https://cdn.britannica.com/41/190741-050-86537C0E/cross-Ku-Klux-Klan-Tennessee-1948.jpg"
                    }
                    altText={"KKK burning a cross"}
                />
                <p>
                    While the Reconstruction Amendments were a significant step
                    towards ensuring civil rights for African Americans, other
                    violence began stirring in the South. A notorious group
                    known as the KKK (Ku Klux Klan) begun terrorizing blacks.
                </p>
                <p>
                    Blacks who excercised their rights, like:
                    <ul>
                        <li>Voting in elections</li>
                        <li>Running for public office</li>
                        <li>Serving on juries</li>
                    </ul>
                    were all at risk of being violently targeted by the KKK.
                </p>
                <p>
                    The federal government responded to this violence with a
                    series of Enforcement Acts, aimed at outlawing any
                    interference with civil rights that were guaranteed in the
                    14th and 15th amendments.
                </p>
                <p>
                    These acts lead to multiple KKK members being arrested, and
                    African Americans freely exercised their rights for a brief
                    period. The KKK act was later deemed unconstitutional, but
                    the group had practically disappeared by then.
                </p>
            </>
        ),
    },
    {
        key: "civil-rights-act-1875",
        title: "Civil Rights Act of 1875",
        className: "civil-rights-act-1875-slide",
        content: (
            <>
                <p>
                    The Civil Rights Act of 1875 was one of the last efforts
                    made during the Reconstruction to further protect civil
                    liberties. It was targeted to private companies who racially
                    profiled their customers.
                </p>
                <p>
                    This bill stated:
                    <ul>
                        <li>
                            All persons are entitled to full and equal enjoyment
                            of public accommodations, like transportation inns,
                            and theatres.
                        </li>
                        <li>
                            No person can be denied access to these public
                            accommodations based on race, color, or previous
                            condition of servitude.
                        </li>
                        <li>
                            African Americans cannot be excluded from jury duty.
                        </li>
                    </ul>
                </p>
                <p>
                    This law would've completely banned racial discrimination
                    nation wide. However, the act was almost never enforced in
                    the south, and was later gutted by the Supreme Court during
                    the Civil Rights Cases of 1883.
                </p>
            </>
        ),
    },
    {
        key: "post-reconstruction",
        title: "Post-Reconstruction Era",
        className: "post-reconstruction-slide",
        content: (
            <>
                <ImageContainer
                    imageSource={
                        "https://cdn.britannica.com/24/187924-050-D8384718/Andrew-Johnson-soldiers-Confederate-White-House-Washington-1865.jpg"
                    }
                    altText={
                        "Andrew Johnson, soldiers, and the White House in 1865"
                    }
                />
                <p>
                    In 1877, the Democratic and Republican parties reached an
                    agreement. In return for President Hayes being elected to
                    office, federal troops would be removed from the South,
                    effectively ending the Reconstruction Era.
                </p>
                <p>
                    This left African Americans vulnerable to descrimination and
                    violence. Southern states quickly passed laws to:
                    <ul>
                        <li>Restrict voting rights</li>
                        <li>Enforce racial segregation</li>
                        <li>Limit economic opportunities</li>
                        <li>Maintain white supremacy</li>
                    </ul>
                    There was no longer any federal enforcement of civil rights
                    laws, and the South was free to enact their own laws without
                    any federal interference.
                </p>
            </>
        ),
    },
    {
        key: "civil-rights-cases-1883",
        title: "Civil Rights Cases of 1883",
        className: "civil-rights-cases-1883-slide",
        content: (
            <>
                <p>
                    In 1883, the Supreme Court heard a series of cases deemed
                    the Civil Rights Cases. They had major implications for the
                    Reconstruction, striking down many civil rights protections
                    that had been established in the previous years.
                </p>
                <p>
                    The Supreme Court ruled:
                    <ul>
                        <li>
                            The 14th amendment did not allow Congress to outlaw
                            discrimination in the private sector.
                        </li>
                        <li>
                            The 14th amendment only barred discrimination by
                            state governments directly.
                        </li>
                    </ul>
                </p>
                <p>
                    This meant a large part of the Civil Rights Act of 1875 was
                    unconstitutional, and essentially legalized private
                    segregation.
                </p>
            </>
        ),
    },
    {
        key: "plessy-ferguson",
        title: "Plessy v. Ferguson, 1896",
        className: "plessy-ferguson-slide",
        content: (
            <>
                <p>
                    Plessy v. Ferguson (1896) was an extremely important Supreme
                    Court case that upheld the constitutionality of racial
                    segregation under "separate but equal."
                </p>
                <p>
                    Homer Plessy, a 7/8ths white man, was arrested for sitting
                    in a whites-only train car. He argued that this violated his
                    14th amendment rights.
                </p>
                <p>
                    However, the Supreme Court ruled 7-1 that racial segregation
                    was constitutional as long as the separate facilities were
                    equal. This provided a legal basis for all Jim Crow laws and
                    led to decades of segregation in the South.
                </p>
            </>
        ),
    },
    {
        key: "jim-crow-laws",
        title: "Jim Crow Laws",
        className: "jim-crow-laws-slide",
        content: (
            <>
                <ImageContainer
                    imageSource={
                        "https://i.natgeofe.com/n/0ab72699-cdb0-4a3c-b161-bc0bc1936fe0/1jimcrow.jpg"
                    }
                    altText={"'Here lies Jim Crow'"}
                />
                <p>
                    Jim Crow laws were state and local laws that enforced racial
                    segregation in the Southern United States. They were enacted
                    in the late 19th and early 20th centuries, following the
                    Reconstruction Era.
                </p>
                <p>
                    States would build entirely new public facilities for blacks
                    and whites, adhering to the "separate but equal" policy.
                    Often, these facilities were not equal at all.
                </p>
                <p>
                    Blacks who attempted to use white facilities often faced
                    violence and arrest. Jim Crow laws drowned the south,
                    enforcing a system of racial oppression that would last for
                    decades.
                </p>
            </>
        ),
    },
    {
        key: "summary",
        title: "Summary",
        className: "summary-slide",
        content: (
            <>
                <p>
                    Following the Civil War and Reconstruction, the Supreme
                    Court's decisions set the stage for the Jim Crow era. Many
                    African Americans protested but faced significant backlash
                    and violence. There was no significant change until the
                    Civil Rights Movement, half a century later.
                </p>
                <p>
                    The Reconstruction ultimately established rights for African
                    Americans, including the right to vote and access to public
                    facilities. However, it failed to provide lasting equality.
                </p>
                <p>
                    The struggle for civil rights would continue for decades to
                    come.
                </p>
            </>
        ),
    },
    {
        key: "citations",
        title: "Citations",
        className: "citations-slide",
        content: (
            <>
                <h1 style={{ textAlign: "center" }}>Works Cited</h1>
                <p>
                    Benson, Sonia, et al. "Fourteenth Amendment." UXL
                    Encyclopedia of U.S. History, vol. 3, UXL, 2009, pp. 577-80.
                    Gale in Context: Middle School,
                    link.gale.com/apps/doc/CX3048900229/
                    MSIC?u=poway_bh&sid=bookmark-MSIC&xid=2390d437. Accessed 22
                    May 2025.
                </p>
                <p>
                    ---. "Radical Republicans." UXL Encyclopedia of U.S.
                    History, vol. 7, UXL, 2009, pp. 1285-86. Gale in Context:
                    Middle School, link.gale.com/apps/doc/CX3048900505/
                    MSIC?u=poway_bh&sid=bookmark-MSIC&xid=f2630b40. Accessed 22
                    May 2025.
                </p>
                <p>
                    ---. "Thirteenth Amendment." UXL Encyclopedia of U.S.
                    History, vol. 8, UXL, 2009, pp. 1553-55. Gale in Context:
                    Middle School, link.gale.com/apps/doc/CX3048900610/
                    MSIC?u=poway_bh&sid=bookmark-MSIC&xid=24071897. Accessed 22
                    May 2025.
                </p>
                <p>
                    "Black Codes." History,
                    www.history.com/articles/black-codes. Accessed 29 May 2025.
                </p>
                <p>
                    "Civil Rights Act of 1875, 'An Act to Protect All Citizens
                    in Their Civil and Legal Rights.'" National Constitution
                    Center, constitutioncenter.org/the-constitution/
                    historic-document-library/detail/
                    civil-rights-act-of-1875-march-1-1875-an-act-to-protect-all-citizens-in-their-civil-and-legal-rights.
                    Accessed 30 May 2025.
                </p>
                <p>
                    "Civil Rights Act of 1866." Britannica,
                    www.britannica.com/topic/
                    Civil-Rights-Act-United-States-1866. Accessed 29 May 2025.
                </p>
                <p>
                    "Confederate Soldiers." Britannica,
                    cdn.britannica.com/24/187924-050-D8384718/
                    Andrew-Johnson-soldiers-Confederate-White-House-Washington-1865.jpg.
                    Accessed 31 May 2025.
                </p>
                <p>
                    "The First Vote." Coursehero,
                    assets.coursehero.com/study-guides/lumen/images/ushistory2ay/
                    politics-of-reconstruction-2/15_The_First_Vote_LC-DIG-ppmsca-37947-1000x5623.jpg.
                    Accessed 31 May 2025. "Here Lies Jim Crow." NatGeofe,
                    i.natgeofe.com/n/0ab72699-cdb0-4a3c-b161-bc0bc1936fe0/1jimcrow.jpg.
                    Accessed 21 May 2025.
                </p>
                <p>
                    "KKK Burning a Cross." Britannica,
                    cdn.britannica.com/41/190741-050-86537C0E/
                    cross-Ku-Klux-Klan-Tennessee-1948.jpg. Accessed 31 May 2025.
                </p>
                <p>
                    "Law and African Americans: After the Civil War." UXL
                    Multicultural: A Comprehensive Resource on African
                    Americans, Hispanic Americans and Native North Americans,
                    UXL, 2003. Gale in Context: Middle School,
                    link.gale.com/apps/doc/EJ2107200198/
                    MSIC?u=poway_bh&sid=bookmark-MSIC&xid=a5ea9c54. Accessed 22
                    May 2025.
                </p>
                <p>
                    "Law and African Americans: After the Civil War." UXL
                    Multicultural: A Comprehensive Resource on African
                    Americans, Hispanic Americans and Native North Americans,
                    UXL, 2003. Gale in Context: Middle School,
                    link.gale.com/apps/doc/EJ2107200198/
                    MSIC?u=poway_bh&sid=bookmark-MSIC&xid=a5ea9c54. Accessed 22
                    May 2025.
                </p>
                <p>
                    Murphy, Richard W. The Nation Reunited : War's Aftermath.
                    Time-Life Books, 1987.
                </p>
                <p>
                    Naden, Corinne J., and Rose Blue. Civil War Ends :
                    Assassination, Reconstruction, and the Aftermath. Raintree
                    Steck-Vaughn, 2000.
                </p>
                <p>
                    "Oct. 22, 1883: Frederick Douglass Denounces Supreme Court
                    Ruling." Zinn Education Project,
                    www.zinnedproject.org/news/tdih/frederick-douglass-denounces-supreme-court-ruling.
                    Accessed 31 May 2025.
                </p>
                <p>
                    "Plessy v. Ferguson." History,
                    www.history.com/articles/plessy-v-ferguson. Accessed 31 May
                    2025.
                </p>
                <p>
                    Wright, Kianna. "The Enforcement Act of 1870 (1870-1871)."
                    BlackPast, 12 Dec. 2019,
                    www.blackpast.org/african-american-history/the-enforcement-act-of-1870-1870-1871/.
                    Accessed 31 May 2025.
                </p>
            </>
        ),
    },
    {
        key: "mock-trial",
        title: "Mock Trial",
        className: "game-intro-slide",
        content: (
            <>
                <p>
                    We will now conduct a mock trial of Plessy v. Ferguson. The
                    class will split into two teams, and we will have one judge.
                </p>
                <p>
                    Each team will present their arguments, and the judge will
                    make a ruling based on the arguments, not the original
                    outcome.
                </p>
                <h2>Background</h2>
                <p>
                    It is currently 1896. Homer Plessy (a 7/8ths white man) was
                    arrested for sitting in a whites-only train car in
                    Louisiana. He is now suing the state for violating his
                    rights under the 14th Amendment.
                </p>
            </>
        ),
    },
];
