/*
脚本功能：网易云音乐听vip

TG频道群：https://t.me/iosapp520

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

#网易云解锁VIP直接听
^http[s]?:\/\/.+(player/url|playlist|entrance|/eapi/search/).*$ url script-request-header https://raw.githubusercontent.com/gjwj666/qx/main/wyy.js

[mitm]
hostname = *music*

 */
var modifiedHeaders = $request.headers;

modifiedHeaders.Cookie = "EVNSM=1.0.0; NMCID=ccuoen.1650709529000.01.3; NMDI=Q1NKTQcBDABlQkjJPUPUB8TrqjKXAAAA64UO1rF1WPa3iw08W%2BgfRxg3p6V%2F3edbcZniymb0PHxcKdhbfZDidkWCqlYpARXgcECH5GT%2F3kVMpc1MWHhUXVugzLW%2BQrU%2B5PJC8ylMDX0%2FE4qio9SkrHo1V6RVGoUMdPf20Ab6nKuWCKDnF84k5VZ9Hac5MtVs8g6KGrsNx9gQpx4E3nUkOx7m%2FSgvzgx%2FyfS3Mh5j0w%3D%3D; NMTID=00OF5goAlGcvSgOAk6dmZH6MLzUEjgAAAGIQSgRWw; URS_APPID=AB7B7EFA13E7F3E3211635625CD09F45F391C2AB4C586D35DDC07E5F485C3FCBB6293116B121D6872A9FEA6913295501; appkey=IuRPVVmc3WWul9fT; appver=8.8.70; buildver=3260; channel=distribution; deviceId=e552ff2a144af6d5d7b62e456760138c; machineid=iPhone13.2; os=iPhone OS; osver=14.4; packageType=release; JSESSIONID-WYYY=fSJ2RmENm%5CMrG%2FI7llQbMa3ia1WgvehZ48Ws4oq8vD9QdhG4oDXKlzfZtn2SjwUPVbqF0FcN8n62c%2Bom%2FYVurjNSFagBOyTOet%2FYYZCs8DO5gm24M%5Cqh30kEl1wzfZU%2Bjl8aX6joJ0gI0nUZpwBI4QYQsfbilgvj3aMsb0vFe3QGTy73%3A1683460374991; _iuqxldmzr_=33; ntes_kaola_ad=1; MUSIC_U=003BD2AC4FA73CA4FA6894012AF4FF8452FB02ACCF45A82F90D1BCA346893BA2833B8D3D91A0B9B36F7C1707DF86726CDBDAC1F3CE860315B8E31193DF65F41FEFAB19800557FE49BFE20ACBE2F6338A85F71D7A9E49D9C90F91D068A344C1B5FAE8314C226F6D7D93EFE3080BEE14C4806EB9D783DF01FE0320C69B00B0637A99B7675A830DF0AA59F9EFA65099F91DD8CFD51BD79F97BE1C699E5C6EC7965A6706A01760AC107CD8F7915D0CA8804F8F6FD50A98298B623178F162E3BFE6EA773E73427C37321B0CB342F648B830149AD39ED267836ADD726FA2B4C1BAD9AA30F24860C24A4D91EECCBAB2A465933858A61D10ED8E0718F8D88A3B20FE7FA275C478D8CA68D387738997D635D4E10385BB619C500F26FE83A07372D3E8EA50E6; _ntes_nnid=dbdf5c71971e4c87abf998e45d594f47,1657630613151; _ntes_nuid=dbdf5c71971e4c87abf998e45d594f47", 
modifiedHeaders["User-Agent"] = "neteasemusic/8.8.70 (iPhone; iOS 14.4; Scale/3.00)", 
modifiedHeaders["MConfig-Info"] = '{"zr4bw6pKFDIZScpo":{"version":632832,"appver":"8.8.70"},"tPJJnts2H31BZXmp":{"version":1441792,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":13524992,"appver":"8.8.70"}}', 
$done({
    headers: modifiedHeaders
}), 
