import styled from 'styled-components';

const StageWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    width: 65%;
    height: 600px;
    margin: 0 auto;
    flex-wrap: wrap;

    @media screen and (min-width: 1693px) and (max-width: 1761px) {
        flex-wrap: nowrap;
    }

    @media screen and (min-width: 1270px) and (max-width: 1338px) {
        flex-wrap: nowrap;
        width: 80%;
    }

    @media screen and (min-width: 847px) and (max-width: 915px) {
        margin-top: 500px;
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

const Stage = styled.div`
    box-sizing: border-box;
    background-color: #C28449;
    width: 275px;
    height: 500px;
    padding: 25px;
    margin: 25px 0;
    border-radius: 25px;
    box-shadow: -20px 20px 30px 5px #9c612a;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    p {
        font-size: 20px;
        color: whitesmoke;
        transition: all 0.3s ease-in-out;
    }

    svg {
        position: relative;
        bottom: -250px;
        transition: all 0.3s ease-in-out;
    }
    
    &:hover {
        flex-wrap: nowrap;
        width: 300px;
        height: fit-content;
        margin: 10px;

        transition: all 0.3s ease-in-out;

        h2 {
            font-size: 30px;
            transition: all 0.3s ease-in-out;
        }

        p {
            font-size: 21px;
            transition: all 0.3s ease-in-out;
        }

        svg{
            bottom: 0;
            transition: all 0.3s ease-in-out;
        }
    }
`

const Stages = () => {
    return (
        <StageWrapper>
            <Stage>
                <h2>Stage 1</h2>
                <br />
                <ul>
                    <li>. token launch</li>
                    <li>. pancakeswap listing</li>
                    <li>. binance listing</li>
                    <li>. marketing campain across all platforms in existence</li>
                    <li>. reach 100+ telegram members</li>
                    <li>. add on coingecko</li>
                    <li>. 10.000k market cap</li>
                    <li>. merch and swag reveal</li>
                    <li>. meme contest % giveaways</li>
                </ul>
                <svg id="b971039f-e28c-4163-8848-8871ac265cf4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 856.12205 674">
                    <path d="M593.26357,266.136h-3.54069V169.13919A56.13918,56.13918,0,0,0,533.58377,113H328.0828a56.13913,56.13913,0,0,0-56.13933,56.13893v532.1324a56.13909,56.13909,0,0,0,56.13905,56.13917h205.501a56.13914,56.13914,0,0,0,56.13933-56.13895V335.18h3.54069Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M535.426,128.93322H508.60134A19.918,19.918,0,0,1,490.16,156.37379H372.4311a19.91806,19.91806,0,0,1-18.44139-27.44057H328.93542a41.92409,41.92409,0,0,0-41.92413,41.924V702.20874a41.92407,41.92407,0,0,0,41.92408,41.92408H535.426a41.92411,41.92411,0,0,0,41.92414-41.924V170.8573a41.92407,41.92407,0,0,0-41.92408-41.92408Zm-4.50666,246.49737a10.8911,10.8911,0,0,1-10.8592,10.8592H467.574a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592h52.48612a10.89115,10.89115,0,0,1,10.8592,10.8592Zm5.88207-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.89111,10.89111,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89112,10.89112,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Zm0-47.96146a10.8911,10.8911,0,0,1-10.8592,10.8592H337.7161a10.89109,10.89109,0,0,1-10.8592-10.8592v-2.7148a10.89111,10.89111,0,0,1,10.8592-10.8592H525.94221a10.89116,10.89116,0,0,1,10.8592,10.8592Z" transform="translate(-171.93898 -113)" fill="#fff" /><circle cx="169.84933" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="190.66279" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="211.47625" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="232.28972" cy="213.56423" r="6.33453" fill="#fff" /><circle cx="300.15971" cy="261.52569" r="6.33453" fill="#fff" /><circle cx="320.97317" cy="261.52569" r="6.33453" fill="#fff" /><circle cx="341.78664" cy="261.52569" r="6.33453" fill="#fff" /><path d="M538.25762,456.6012H323.5908a19.01566,19.01566,0,0,0-19.01568,19.01563v104.59a19.01571,19.01571,0,0,0,19.01566,19.01571H538.25762a19.0157,19.0157,0,0,0,19.0157-19.01565V475.61688a19.01566,19.01566,0,0,0-19.0156-19.01568Zm-219.978,12.97163c.42392-.07665,10.47581-1.78725,18.79934,3.22117,8.323,5.00748,11.52088,14.6906,11.65264,15.1l.33649,1.04412-1.0801.19161a28.669,28.669,0,0,1-4.65836.34214,27.73763,27.73763,0,0,1-14.14144-3.56421c-8.323-5.00653-11.52041-14.6897-11.65221-15.09912l-.33651-1.04411Zm46.59851,97.10524H326.59051a10.52909,10.52909,0,0,1,0-21.05818h38.28762a10.52909,10.52909,0,0,1,0,21.05818Zm174.2086-1.91436A11.5201,11.5201,0,0,1,527.60041,576.25H498.88473a11.5201,11.5201,0,0,1-11.48627-11.48627V547.53425A11.52,11.52,0,0,1,498.88473,536.048h28.71568a11.52,11.52,0,0,1,11.48627,11.48627Z" transform="translate(-171.93898 -113)" fill="#f9a826" /><path d="M508.14328,561.21324H496.5975a3.10848,3.10848,0,0,0,0,6.217h11.54578a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45864,561.21324H517.91281a3.10848,3.10848,0,0,0,0,6.217H529.4586a3.10849,3.10849,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M508.14155,552.43841H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45691,552.43841H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M508.14155,543.84123H496.59576a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><path d="M529.45691,543.84123H517.91107a3.10848,3.10848,0,0,0,0,6.217h11.54579a3.10848,3.10848,0,0,0,0-6.217Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><rect x="487" y="383.00001" width="28" height="27.99999" fill="#e6e6e6" /><path d="M625.939,513h46v46h-46Zm44,2h-42v42h42Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><rect y="152.00001" width="28" height="28" fill="#e6e6e6" /><path d="M232.939,276h-46V230h46Zm-44-2h42V232h-42Z" transform="translate(-171.93898 -113)" fill="#3f3d56" /><polygon points="653.077 661.417 640.817 661.417 634.985 614.129 653.079 614.129 653.077 661.417" fill="#ffb8b8" /><path d="M632.06,657.91362H655.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H617.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,632.06,657.91362Z" fill="#2f2e41" /><polygon points="714.077 661.417 701.817 661.417 695.985 614.129 714.079 614.129 714.077 661.417" fill="#ffb8b8" /><path d="M693.06,657.91362H716.7039a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H678.17317a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,693.06,657.91362Z" fill="#2f2e41" /><path d="M763.51493,605.30342a10.74267,10.74267,0,0,1,4.51052-15.84306l41.67577-114.86668,20.5071,11.19135L782.62359,595.55579a10.80091,10.80091,0,0,1-19.10866,9.74763Z" transform="translate(-171.93898 -113)" fill="#ffb8b8" /><path d="M879.75379,626.88737a10.74271,10.74271,0,0,1-2.89305-16.21659L863.95,489.16137l23.33776,1.06622L892.65342,609.748a10.80091,10.80091,0,0,1-12.89963,17.13934Z" transform="translate(-171.93898 -113)" fill="#ffb8b8" /><circle cx="670.5842" cy="315.75634" r="24.56103" fill="#ffb8b8" /><path d="M879.59694,599.25244H805.55006l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06934-14.58349h.00024c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23446,28.23446,0,0,1,9.45947,23.396Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M819.77174,524.88428l-33.33667-6.76319,15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99756Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M862.46778,537.44189l-2.00415-45.9414c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13477,7.60547-1.32959,15.03174,4.66016,16.55835,13.35987l7.533,42.92773Z" transform="translate(-171.93898 -113)" fill="#ccc" /><path d="M877.13341,593.75241c11.91455,45.37671,13.21436,103.06939,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02973-10.61328-122.71527-2-160Z" transform="translate(-171.93898 -113)" fill="#2f2e41" /><path d="M858.70645,447.73782c-4.582,4.88078-13.09131,2.26066-13.68835-4.40717a8.05477,8.05477,0,0,1,.01014-1.5557c.30826-2.95357,2.01461-5.635,1.60587-8.7536a4.59042,4.59042,0,0,0-.84011-2.14891c-3.65124-4.88934-12.22227,2.18687-15.6682-2.2393-2.113-2.714.3708-6.98712-1.25065-10.02051-2.14006-4.00357-8.47881-2.0286-12.45388-4.22115-4.42275-2.43949-4.15821-9.22525-1.24686-13.35269,3.55052-5.0336,9.77572-7.71952,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78752,4.88021,6.97317,5.34986,16.34794,2.90917,24.50175C867.5152,437.69294,862.44812,443.75214,858.70645,447.73782Z" transform="translate(-171.93898 -113)" fill="#2f2e41" /><path d="M1027.061,787h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-171.93898 -113)" fill="#3f3d56" />
                </svg>
            </Stage>
            <Stage>
                <h2>Stage 2</h2>
                <br />
                <ul>
                    <li>. 1.000 telegram members</li>
                    <li>. 100 holders</li>
                    <li>. new interactive website</li>
                    <li>. partnerships</li>
                    <li>. merch shop opened</li>
                    <li>. 50.000k market cap</li>
                    <li>. charity event</li>
                    <li>. skynet collaboration</li>
                </ul>

                <svg id="a3b698d4-91aa-4644-9cd7-168aa6af3798" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 835.21315 613.09812">
                    <path d="M970.80027,754.8404l.95118-1.75879c-12.75342-6.89746-28.62574-15.481-36.916-29.56738-8.17236-13.88623-8.35571-32.74268-.47852-49.21094,6.70362-14.01562,19.01783-26.57226,35.61109-36.313,3.273-1.92138,6.70874-3.74219,10.03149-5.50342,8.0315-4.25634,16.33643-8.6582,23.18433-14.90283,9.43164-8.60107,16.56787-23.03467,11.249-35.89111a23.85569,23.85569,0,0,0-20.67749-14.46729l-.11279,1.99707a21.86061,21.86061,0,0,1,18.94775,13.24805c4.94263,11.94727-1.83862,25.50488-10.75415,33.63574-6.66064,6.07373-14.8518,10.415-22.77319,14.61328-3.34155,1.771-6.79712,3.60254-10.10767,5.5459-16.93847,9.94336-29.52636,22.79785-36.40258,37.17432-8.1604,17.06055-7.94629,36.63672.55908,51.08887C941.68455,739.09479,957.82835,747.82575,970.80027,754.8404Z" transform="translate(-181.36642 -141.74228)" fill="#f1f1f1" /><ellipse cx="799.71315" cy="427.52453" rx="17.5" ry="8.5" fill="#f1f1f1" /><ellipse cx="785.71315" cy="483.52453" rx="17.5" ry="8.5" fill="#f1f1f1" /><ellipse cx="817.71315" cy="492.52453" rx="17.5" ry="8.5" fill="#f1f1f1" /><ellipse cx="767.71315" cy="539.52453" rx="17.5" ry="8.5" fill="#f1f1f1" /><ellipse cx="732.71315" cy="539.52453" rx="17.5" ry="8.5" fill="#f1f1f1" /><path d="M318.65258,581.22591H256.55783a6.34945,6.34945,0,0,1-6.34238-6.34186V370.28612a6.34945,6.34945,0,0,1,6.34238-6.34186h62.09475a6.34945,6.34945,0,0,1,6.34238,6.34186V574.88405A6.34945,6.34945,0,0,1,318.65258,581.22591Z" transform="translate(-181.36642 -141.74228)" fill="#f9a826" /><path d="M431.89013,581.22591H369.79538a6.34945,6.34945,0,0,1-6.34238-6.34186V289.09694a6.34946,6.34946,0,0,1,6.34238-6.34187h62.09475a6.34946,6.34946,0,0,1,6.34238,6.34187V574.88405A6.34945,6.34945,0,0,1,431.89013,581.22591Z" transform="translate(-181.36642 -141.74228)" fill="#f9a826" /><path d="M545.12768,581.22591H483.03293a6.34945,6.34945,0,0,1-6.34238-6.34186V370.28612a6.34945,6.34945,0,0,1,6.34238-6.34186h62.09475a6.34945,6.34945,0,0,1,6.34238,6.34186V574.88405A6.34945,6.34945,0,0,1,545.12768,581.22591Z" transform="translate(-181.36642 -141.74228)" fill="#f9a826" /><path d="M658.36523,581.22591H596.27048a6.21067,6.21067,0,0,1-6.34238-6.05456V256.76127a6.21067,6.21067,0,0,1,6.34238-6.05456h62.09475a6.21067,6.21067,0,0,1,6.34238,6.05456V575.17135A6.21067,6.21067,0,0,1,658.36523,581.22591Z" transform="translate(-181.36642 -141.74228)" fill="#f9a826" /><path d="M771.60278,581.22591H709.508a6.34945,6.34945,0,0,1-6.34238-6.34186V199.36152a6.34945,6.34945,0,0,1,6.34238-6.34186h62.09475a6.34945,6.34945,0,0,1,6.34238,6.34186V574.88405A6.34945,6.34945,0,0,1,771.60278,581.22591Z" transform="translate(-181.36642 -141.74228)" fill="#f9a826" /><circle cx="106.23879" cy="183.74395" r="12.81935" fill="#3f3d56" /><circle cx="219.47634" cy="100.4182" r="12.81935" fill="#3f3d56" /><circle cx="332.71388" cy="183.74395" r="12.81935" fill="#3f3d56" /><circle cx="445.95143" cy="59.82361" r="12.81935" fill="#3f3d56" /><circle cx="559.18898" cy="12.81935" r="12.81935" fill="#3f3d56" /><path d="M844.36642,583.60675h-662a1,1,0,1,1,0-2h662a1,1,0,0,1,0,2Z" transform="translate(-181.36642 -141.74228)" fill="#cbcbcb" /><path d="M1009.36642,754.60675h-324a1,1,0,0,1,0-2h324a1,1,0,0,1,0,2Z" transform="translate(-181.36642 -141.74228)" fill="#cbcbcb" /><path d="M801.30167,567.35289a7.92988,7.92988,0,0,0-1.03443-12.11551l3.9317-17.68959-10.16717-5.01117-5.20146,25.05911a7.9729,7.9729,0,0,0,12.47136,9.75716Z" transform="translate(-181.36642 -141.74228)" fill="#ffb7b7" /><path d="M912.48519,567.74064a7.93,7.93,0,0,0-1.9687-11.99917l2.55126-17.94076-10.52441-4.20951-3.247,25.38643a7.9729,7.9729,0,0,0,13.18889,8.763Z" transform="translate(-181.36642 -141.74228)" fill="#ffb7b7" /><polygon points="651.862 602.078 641.494 602.077 636.562 562.087 651.864 562.088 651.862 602.078" fill="#ffb7b7" /><path d="M835.87266,753.87018l-33.43043-.00124v-.42284a13.01275,13.01275,0,0,1,13.01205-13.01185h.00083l20.41817.00083Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><polygon points="686.535 602.078 676.167 602.077 671.235 562.087 686.537 562.088 686.535 602.078" fill="#ffb7b7" /><path d="M870.54559,753.87018l-33.43043-.00124v-.42284a13.01275,13.01275,0,0,1,13.01206-13.01185h.00082l20.41817.00083Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><path d="M888.77664,407.37241l11.17961-4.03435s4.74517,1.00766,4.74517,13.876,12.602,132.88228,12.602,132.88228l-22.0543,5.80691L882.78362,442.04Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><path d="M814.07035,407.37241l-11.17961-4.03435s-4.74517,1.00766-4.74517,13.876-12.602,132.88228-12.602,132.88228l22.0543,5.80691L820.06336,442.04Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><path d="M814.21351,544.24938,811.15773,634.401l6.76561,99.72381,17.43221.40286,2.537-93.02495,14.37658-46.51247-1.45041,137.09227,19.7391-.23579,12.22576-94.31836s16.14452-78.05673,7.19162-93.279l-41.232-13.71128Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><path d="M814.54979,533.38618l-.995,21.68687s13.91139,6.92282,38.36383,2.70576,40.70648-1.437,40.70648-1.437l-1.87746-27.64561Z" transform="translate(-181.36642 -141.74228)" fill="#e5e5e5" /><path d="M802.446,403.65842l32.15376-14.08962,1.91777-7.37953,31.27959.90612,1.35159,7.53885,30.80754,12.70382L886.383,450.53524l1.392,33.20185,16.92637,60.51229s-14.27695,12.12481-48.57686,6.90809L850.2061,539.2319l-3.6203,12.61164s-30.07706,11.06444-38.413-3.33894L814.21351,444.459Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><circle cx="670.50655" cy="212.74354" r="20.7708" fill="#ffb7b7" /><path d="M876.55254,346.43738a12.64979,12.64979,0,0,0-2.09872-4.68984,25.33974,25.33974,0,0,0-3.7828-10.91331,11.45012,11.45012,0,0,0-3.389-3.91163,10.00418,10.00418,0,0,0-5.33191-1.32935c-.3385-.00566-.94747.097-1.49558.122-.35063-.10857-.70467-.20551-1.05953-.29664-.20719-.46075-.61769-1.80357-.73213-1.71263l-1.54725,1.22935c-.65413-.11363-1.31172-.20218-1.97169-.27238q-.36048-1.02808-.72092-2.05619a14.08889,14.08889,0,0,0-1.02221,1.92119q-.98538-.04829-1.97211-.03384l-1.315-1.26323a1.85457,1.85457,0,0,1-1.45073,1.421c-.6051.06207-1.20777.14318-1.80843.23981-.04888-.00031-.09848,0-.14644-.00122-3.23851-.08075-6.72317-.226-9.43127,1.55195a9.29343,9.29343,0,0,0-3.00216,3.4075c-.33153.22536-.6642.44906-.98634.688a10.78,10.78,0,0,0-2.77778,2.75391,11.6768,11.6768,0,0,0-1.22914,2.97838,28.55117,28.55117,0,0,0-1.415,9.75368,14.476,14.476,0,0,0,3.55848,9.03419c1.389,1.4923,3.15453,2.59429,4.54533,4.08484,2.86373,3.0691,3.40054,7.34954,5.84994,10.597,2.59077,3.43475,7.31929,5.695,11.472,6.34282a19.16307,19.16307,0,0,0,14.27546-3.56031,8.83167,8.83167,0,0,0,2.43056-2.54833c1.44134-2.49306.83046-5.62653,1.36556-8.45609C872.36687,356.21425,877.42847,351.76348,876.55254,346.43738Z" transform="translate(-181.36642 -141.74228)" fill="#2f2e41" /><polygon points="105.555 184.546 104.361 182.942 219.477 97.239 332.348 181.429 446.764 57.205 446.969 57.121 558.009 11.292 558.772 13.141 447.936 58.885 332.597 184.11 219.476 99.733 105.555 184.546" fill="#3f3d56" />
                </svg>
            </Stage>
            <Stage>
                <h2>Stage 3</h2>
                <br />
                <ul>
                    <li>. 10.000 telegram members</li>
                    <li>. 1.000 holders</li>
                    <li>. listing on all the biggest exchanges</li>
                    <li>. integration with Skynet</li>
                </ul>
                <svg id="f8b6a39e-83da-4016-9016-ff4c8b42d6ea" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 826 541">
                    <path d="M990.63733,719.30506l1.22492-.02393a284.08018,284.08018,0,0,0-4.34823-40.59824c-5.29683-28.71268-14.10454-47.56977-26.17851-56.04732l-.70337,1.00242C988.837,643.44128,990.623,718.54845,990.63733,719.30506Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M975.32581,719.012l1.22492-.02393c-.02633-1.3565-.79191-33.32647-13.37783-42.16289l-.70338,1.00243C974.54768,686.30755,975.31983,718.686,975.32581,719.012Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><circle cx="766.66361" cy="438.12463" r="6.12461" fill="#f1f1f1" /><circle cx="769.6966" cy="490.79626" r="6.12461" fill="#f1f1f1" /><path d="M978.18063,627.42068a27.20481,27.20481,0,0,0,1.849,13.92772,24.79288,24.79288,0,0,0,4.16825-26.62395A27.20511,27.20511,0,0,0,978.18063,627.42068Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M958.161,645.27624a27.20484,27.20484,0,0,0,14.03685.6061,24.79294,24.79294,0,0,0-25.49041-8.74345A27.205,27.205,0,0,0,958.161,645.27624Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M957.93488,691.92193a19.06866,19.06866,0,0,0,9.83869.42484,17.37777,17.37777,0,0,0-17.86669-6.12845A19.06838,19.06838,0,0,0,957.93488,691.92193Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M469.0259,719.30505l-1.77793-.03472a412.33109,412.33109,0,0,1,6.31131-58.927c7.68816-41.67549,20.47226-69.04591,37.99721-81.3508l1.02092,1.455C471.639,609.19135,469.04674,718.20687,469.0259,719.30505Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M491.25005,718.87967l-1.77793-.03473c.03822-1.96892,1.14943-48.37224,19.41748-61.198l1.02092,1.455C492.37949,671.41028,491.25873,718.40654,491.25005,718.87967Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><circle cx="335.69201" cy="392.21935" r="8.88967" fill="#f1f1f1" /><circle cx="331.28971" cy="468.67043" r="8.88966" fill="#f1f1f1" /><path d="M487.10638,585.938a39.487,39.487,0,0,1-2.68371,20.21562,35.986,35.986,0,0,1-6.05007-38.64376A39.48723,39.48723,0,0,1,487.10638,585.938Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M516.16415,611.85472a39.48692,39.48692,0,0,1-20.374.87974,35.98608,35.98608,0,0,1,36.99847-12.69082A39.48714,39.48714,0,0,1,516.16415,611.85472Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M516.4924,679.55937a27.67754,27.67754,0,0,1-14.28053.61664,25.22328,25.22328,0,0,1,25.93291-8.89525A27.67726,27.67726,0,0,1,516.4924,679.55937Z" transform="translate(-187 -179.5)" fill="#f1f1f1" /><path d="M331.67889,340.73408l-4.27749-26.16824L315.324,311.54641s-9.58554-2.95248-11.826,16.35507c-2.24042,19.30769-.50354,55.35612-.50354,55.35612l-26.51674,83.97065a11.72858,11.72858,0,1,0,16.19395,6.98492l34.47824-78.87785Z" transform="translate(-187 -179.5)" fill="#ffb7b7" /><path d="M405.12225,320.14111l-6.34067-25.74625,9.922-7.519s7.65649-6.479,17.29787,10.39832c9.64144,16.87747,22.198,50.71293,22.198,50.71293l57.35734,66.81575a11.72861,11.72861,0,1,1-12.15092,12.78235L430.726,368.57925Z" transform="translate(-187 -179.5)" fill="#ffb7b7" /><polygon points="267.689 526.093 282.072 526.092 288.915 470.614 267.686 470.615 267.689 526.093" fill="#ffb7b7" /><path d="M451.01987,700.89677l28.32581-.00115h.00115a18.05238,18.05238,0,0,1,18.05142,18.05114v.5866l-46.37752.00172Z" transform="translate(-187 -179.5)" fill="#2f2e41" /><polygon points="87.016 526.093 101.399 526.092 108.242 470.614 87.013 470.615 87.016 526.093" fill="#ffb7b7" /><path d="M270.34694,700.89677l28.32581-.00115h.00115a18.05238,18.05238,0,0,1,18.05142,18.05114v.5866l-46.37752.00172Z" transform="translate(-187 -179.5)" fill="#2f2e41" /><circle cx="175.23009" cy="52.43113" r="38.90176" fill="#2f2e41" /><ellipse cx="323.32833" cy="202.41945" rx="16.09728" ry="12.07296" transform="translate(-235.43149 108.41494) rotate(-45)" fill="#2f2e41" /><ellipse cx="387.97281" cy="192.27914" rx="12.07296" ry="16.09728" transform="translate(-128.2553 294.03173) rotate(-66.86956)" fill="#2f2e41" /><circle cx="363.46387" cy="241.21787" r="33.01551" transform="translate(-209.53283 264.93844) rotate(-61.33682)" fill="#ffb7b7" /><path d="M328.77225,220.45121a44.90373,44.90373,0,0,0,25.66215,7.93072,27.51736,27.51736,0,0,1-10.9065,4.487,90.54536,90.54536,0,0,0,36.98491.20781,23.937,23.937,0,0,0,7.74243-2.65919,9.79832,9.79832,0,0,0,4.779-6.39139c.81144-4.63558-2.80066-8.84711-6.55444-11.68544a48.34817,48.34817,0,0,0-40.62844-8.11869c-4.53846,1.17313-9.085,3.15525-12.03283,6.8s-3.82105,9.26372-1.01249,13.01683Z" transform="translate(-187 -179.5)" fill="#2f2e41" /><path d="M346.91765,284.15122l-32.6779,26.687,28.55215,68.079.54464,10.89263s-29.63979,27.328-47.97909,103.66828-55.37958,177.77807-55.37958,177.77807l74.10071,18.12764,51.52065-172.68961,65.6767,135.48025,9.343,40.07162,57.28023-15.90144L475.79244,568.80829,421.5723,401.88576l4.4524-46.11417s9.92186-23.01733-7.31466-47.38628l-5.40649-22.89807L385.317,280.71681Z" transform="translate(-187 -179.5)" fill="#2f2e41" /><path d="M896.41455,526.4292H669.54305a6.84142,6.84142,0,0,1-6.83348-6.83348v-76.535a6.84142,6.84142,0,0,1,6.83348-6.83348h226.8715a6.84131,6.84131,0,0,1,6.83348,6.83348v76.535A6.84131,6.84131,0,0,1,896.41455,526.4292Z" transform="translate(-187 -179.5)" fill="#e5e5e5" /><rect x="511.24366" y="277.22771" width="60.13462" height="6.83348" fill="#fff" /><circle cx="650.64663" cy="281.3278" r="4.10009" fill="#f9a826" /><circle cx="664.31359" cy="281.3278" r="4.10009" fill="#f9a826" /><circle cx="677.98055" cy="281.3278" r="4.10009" fill="#f9a826" /><path d="M896.41455,623.4646H669.54305a6.84142,6.84142,0,0,1-6.83348-6.83348v-76.535a6.84142,6.84142,0,0,1,6.83348-6.83348h226.8715a6.84131,6.84131,0,0,1,6.83348,6.83348v76.535A6.84131,6.84131,0,0,1,896.41455,623.4646Z" transform="translate(-187 -179.5)" fill="#e5e5e5" /><rect x="511.24366" y="374.26311" width="60.13462" height="6.83348" fill="#fff" /><circle cx="650.64663" cy="378.3632" r="4.10009" fill="#f9a826" /><circle cx="664.31359" cy="378.3632" r="4.10009" fill="#f9a826" /><circle cx="677.98055" cy="378.3632" r="4.10009" fill="#f9a826" /><path d="M896.41455,720.5H669.54305a6.84142,6.84142,0,0,1-6.83348-6.83348v-76.535a6.84142,6.84142,0,0,1,6.83348-6.83348h226.8715a6.84131,6.84131,0,0,1,6.83348,6.83348v76.535A6.84131,6.84131,0,0,1,896.41455,720.5Z" transform="translate(-187 -179.5)" fill="#e5e5e5" /><rect x="511.24366" y="471.29851" width="60.13462" height="6.83348" fill="#fff" /><circle cx="650.64663" cy="475.3986" r="4.10009" fill="#f9a826" /><circle cx="664.31359" cy="475.3986" r="4.10009" fill="#f9a826" /><circle cx="677.98055" cy="475.3986" r="4.10009" fill="#f9a826" /><path d="M624.16975,555.4751a51.65758,51.65758,0,0,1-12.80592-1.65653l-.82437-.22809-.76473-.38315c-27.64741-13.86188-50.972-32.17148-69.32613-54.42051A206.01576,206.01576,0,0,1,505.445,436.63119a239.23058,239.23058,0,0,1-13.52819-84.27411c.01166-.60191.02157-1.06666.02157-1.38685,0-13.93921,7.73735-26.16983,19.7117-31.15922,9.1646-3.81859,92.37477-37.99632,98.38691-40.46576,11.3225-5.6733,23.40157-.938,25.33457-.11,4.3358,1.77271,81.25852,33.235,97.88147,41.15044,17.13161,8.15789,21.7025,22.81326,21.7025,30.18661,0,33.38152-5.78132,64.57921-17.18348,92.72653a214.70835,214.70835,0,0,1-38.585,62.18361c-31.49806,35.44645-63.00448,48.01241-63.30855,48.12316A34.42708,34.42708,0,0,1,624.16975,555.4751ZM616.76046,537.122c2.73154.61241,9.02035,1.531,13.11931.03575,5.20719-1.899,31.57753-15.57359,56.21984-43.30474,34.04717-38.315,51.32274-86.48008,51.348-143.15748-.06081-1.14826-.87625-9.338-11.72177-14.50227-16.30062-7.76232-96.25525-40.45566-97.061-40.78518l-.2209-.09365c-1.67557-.70216-7.00808-2.18111-10.68387-.25491l-.736.34312c-.89121.366-89.21978,36.64445-98.64007,40.56951-6.58977,2.74572-8.93768,9.54785-8.93768,14.9981,0,.3983-.0103.97768-.02487,1.72647C508.66861,391.47757,517.64272,486.90515,616.76046,537.122Z" transform="translate(-187 -179.5)" fill="#3f3d56" /><path d="M613.69824,287.305s-89.13138,36.60753-98.68117,40.58661-14.32468,13.52887-14.32468,23.07866S493.53,485.132,613.69824,545.38167c0,0,10.90644,3.01772,19.181,0s113.32231-53.94993,113.32231-194.80934c0,0,0-14.32469-16.71214-22.28285S631.97694,287.305,631.97694,287.305,622.05431,282.928,613.69824,287.305Z" transform="translate(-187 -179.5)" fill="#f9a826" /><path d="M623.248,315.95433V511.24254s89.9272-43.28737,89.13138-157.089Z" transform="translate(-187 -179.5)" opacity="0.2" /><path d="M1012,720.5H188a1,1,0,0,1,0-2h824a1,1,0,0,1,0,2Z" transform="translate(-187 -179.5)" fill="#cbcbcb" />
                </svg>
            </Stage>
            <Stage>
                <h2>Stage 4</h2>
                <br />
                <ul>
                    <li>. the rest of humanity as telegram members</li>
                    <li>. integration with skynet completed</li>
                    <li>. the only market coin still available</li>
                    <li>. humanity overthrown</li>
                    <li>. WHAT DOES THE FOX SAY?!</li>
                </ul>
                <svg id="bcd903a6-af0e-4c78-94ae-0146d121bb13" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 795.30964 524.87772">
                    <circle cx="229.82018" cy="128.93492" r="125" fill="#f9a826" /><path d="M741.59259,225.54924c-.84172-3.30377-3.58023-5.77558-6.43582-7.63822s-5.99805-3.35964-8.43669-5.74274c-2.438-2.383-4.07784-6.00667-2.946-9.22263,1.37576-3.90855,5.96032-5.47043,9.96791-6.5242a1077.20106,1077.20106,0,0,0-110.43018-6.16059,6.64252,6.64252,0,0,0-11.9883,3.96116V312.78577h13.32177V239.95414q47.46369.115,94.928.22994c5.12316.01236,10.45382-.02025,15.05984-2.264C739.23981,235.67644,742.85777,230.51417,741.59259,225.54924Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M815.14658,438.01041V398.0451h30.64007a41.29722,41.29722,0,0,0,41.29748-41.29741v-.00008h-233.131a18.65051,18.65051,0,0,1,18.65047-18.65047H835.12923v-4.63636c0-15.83294-10.96053-28.66807-24.4807-28.66807H608.09324c-31.19688,0-59.69949,20.09413-74.40157,51.9549H501.0722a10.65616,10.65616,0,0,0-7.41544,3.00285l-20.62727,19.98265a10.65735,10.65735,0,0,0,7.41543,18.312h25.6366v39.96531H388.30745a10.65761,10.65761,0,0,0-7.96574,3.57705l-23.68322,26.6433a10.65764,10.65764,0,0,0,7.96575,17.738H437.8699a10.65626,10.65626,0,0,1,9.03513,5.006l12.85342,20.55093a10.65766,10.65766,0,0,1-8.21357,16.27713l-158.864,12.28946a10.65719,10.65719,0,0,0-8.95967,6.39557l-33.64073,77.7938a10.65736,10.65736,0,0,0,9.78188,14.88747H790.67563a213.55436,213.55436,0,0,0,38.76518-3.53453c94.76865-17.48621,162.8853-101.25578,162.8853-197.62411v-.00008ZM546.04683,398.0451H775.18127v39.96531H546.04683Zm333.04424,85.25941a42.62941,42.62941,0,0,1-42.62966,42.62958H492.75975V525.934a42.62983,42.62983,0,0,1,42.62967-42.62959H879.09107Z" transform="translate(-202.34518 -187.56114)" fill="#3f3d56" /><path d="M823.13964,504.61926H538.05377a6.66872,6.66872,0,0,0-6.66088,6.66088v15.98612H829.80053V511.28014A6.66873,6.66873,0,0,0,823.13964,504.61926ZM594.0052,507.28361h31.43756v17.3183H594.0052Zm-2.66435,17.3183H559.90329v-17.3183h31.43756Zm36.76626-17.3183H659.544v17.3183H628.10711Zm34.10126,0h31.43691v17.3183H662.20837Zm34.10126,0h31.43755v17.3183H696.30963Zm34.10191,0h31.43755v17.3183H730.41154Zm34.10191,0H795.951v17.3183H764.51345Zm-230.45621,3.99653a4.0009,4.0009,0,0,1,3.99653-3.99653h19.18517v17.3183h-23.1817Zm293.07893,13.32177H798.61536v-17.3183h24.52428a4.00089,4.00089,0,0,1,3.99653,3.99653Z" transform="translate(-202.34518 -187.56114)" fill="#3f3d56" /><rect x="584.82569" y="129.22117" width="17.3183" height="71.93756" fill="#3f3d56" /><path d="M486.09887,643.16566H206.34171a3.99653,3.99653,0,1,1,0-7.99306H486.09887a3.99653,3.99653,0,1,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M362.20641,667.14484H246.307a3.99653,3.99653,0,1,1,0-7.99306H362.20641a3.99653,3.99653,0,0,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M873.76237,643.16566H594.0052a3.99653,3.99653,0,1,1,0-7.99306H873.76237a3.99653,3.99653,0,1,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M701.91154,667.14484H422.15438a3.99653,3.99653,0,1,1,0-7.99306H701.91154a3.99653,3.99653,0,1,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M486.09887,688.45968H206.34171a3.99654,3.99654,0,0,1,0-7.99307H486.09887a3.99654,3.99654,0,0,1,0,7.99307Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M653.95317,712.43886H538.05377a3.99653,3.99653,0,0,1,0-7.99306h115.8994a3.99653,3.99653,0,0,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M403.5039,712.43886H287.6045a3.99653,3.99653,0,1,1,0-7.99306H403.5039a3.99653,3.99653,0,0,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M873.76237,688.45968H594.0052a3.99653,3.99653,0,0,1,0-7.99307H873.76237a3.99654,3.99654,0,0,1,0,7.99307Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" /><path d="M993.65829,712.43886H713.90113a3.99653,3.99653,0,0,1,0-7.99306H993.65829a3.99653,3.99653,0,0,1,0,7.99306Z" transform="translate(-202.34518 -187.56114)" fill="#ccc" />
                </svg>
            </Stage>
        </StageWrapper>
    )
}

export default Stages
