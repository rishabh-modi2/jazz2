let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '*ć TAG ALL ć*\n\nā ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\nā `, m, {
    contextInfo: { mentionedJid: users }
})
}
handler.command = ['tagall']
handler.register = true

handler.admin = true
handler.group = true

module.exports = handler
